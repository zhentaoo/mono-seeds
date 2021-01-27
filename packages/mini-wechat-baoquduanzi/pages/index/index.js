//获取应用实例
import touxiang from '../../touxiang/touxiang.js'
import sha1 from '../../utils/sha1.js'
import util from '../../utils/util.js'
import mockData from './data.js'
import sententce from '../../data/sentence.js'

const app = getApp()
var limit = 15
var offset = 0

var seed = util.formatTime(new Date()) + 'b61d91ea6c3'
var code = sha1.sha1(seed)
var key = code.substr(-15)

var yuluSize = 45

Page({
  data: {
    data: mockData,
    userInfo: wx.getStorageSync('userInfo'),
  },
  onReachBottom: function(e) {
    wx.showNavigationBarLoading()
    this.getData('add')
  },
  onPullDownRefresh: function(e) {
    wx.showNavigationBarLoading()
    wx.stopPullDownRefresh();
    this.getData('fresh')
  },
  onLoad: function() {
    let openid = wx.getStorageSync('openid')
    if (openid) {
      this.getData('fresh');
    }

    if (!openid) {
      wx.login({
        // 登录获取用户省份标示
        success: (res) => {
          if (res.code) {
            let queryObj = {
              "key": key,
              "code": res.code
            }
            console.log(queryObj);

            // php登录接口
            wx.request({
              url: 'https://juhe.qqeasy.com/information/wx-login',
              method: 'POST',
              data: queryObj,
              header: {
                'content-type': 'application/json'
              },
              success: (res) => {
                openid = res.data.openid
                wx.setStorageSync('openid', openid)
                this.getData('add')
              }
            })
            // php登录接口结束
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      });
    }    
  },
  getData: function(type) {
    if (type == 'fresh') {
      offset = 0;
      limit = 15;
    }
    let openid = wx.getStorageSync('openid')

    let queryObj = {
      key: key,
      type: '',
      openid: openid,
      limit: limit,
      offset: offset
    }

    const requestTask = wx.request({
      url: 'https://juhe.qqeasy.com/information/get-jokes',
      method: 'POST',
      data: queryObj,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        // 拿到段子
        let contents = res.data.data.contents

        // 段子赋予头像，数据处理
        contents.forEach((el) => {
          let index = (el.content || el.title || '1').length % 30
          el.content = el.content ? el.content.trim() : el.content

          el.avatar = el.avatar || touxiang[index].url
          el.authorName = el.authorName || touxiang[index].name

          let discuss = el.discuss

          if (discuss) {
            discuss = JSON.parse(discuss)
            discuss = discuss.map(el => {
              let index = (el || '1').length % 30
              let obj = {}

              obj.content = el
              obj.avatar = touxiang[index].url
              obj.authorName = touxiang[index].name
              return obj;
            })
            el.discuss = discuss.slice(0, 5)            
          }
        })  

        // 刷新：直接赋值
        if(type == 'fresh') {
          let newData = contents
          this.setData({
            data: newData
          })
          offset = 0
        }

        // 下拉：concat数据
        if(type == 'add') {
          let newData = this.data.data.concat(contents)
          this.setData({
            data: newData
          })
          offset = limit + offset
        }
        
        wx.hideNavigationBarLoading()
      },
      fail: (err) => {
        console.log(gData.data.contents)
        wx.hideNavigationBarLoading()
      }
    })
  },
  getUserInfo: (e) => {
    let openid = null
    let userInfo = e.detail.userInfo
    
    wx.login({
      // 登录获取用户省份标示
      success: (res) => {
        if (res.code) {
          let queryObj = {
            "key": key,
            "code": res.code,
            "userInfo": userInfo
          }
          // 登录信息
          wx.request({
            url: 'https://juhe.qqeasy.com/information/wx-login',
            method: 'POST',
            data: queryObj,
            header: {
              'content-type': 'application/json'
            },
            success: (res) => {
              openid = res.data.openid
              wx.setStorageSync('openid', openid)
              wx.setStorageSync('userInfo', userInfo)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  dianzan: function(e) {
    var item = e.currentTarget.dataset.item

    var newData = this.data.data
    newData.forEach(el => {
      if (el.content == item.content && el.img_url == item.img_url) {
        if (el.clicked) {
          el.clicked = null
        } else {
          el.clicked = 1
        }
      }
    })
    
    this.setData({
      data: newData
    })
  },
  talk: function(e) {
    let rd = Math.floor(Math.random() * yuluSize)
    let str = sententce[rd]  

    wx.showToast({
      title: str,
      icon: 'none',
      duration: 2800
    })
  },

  preview: function(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.imgurl],
    })
  },
})