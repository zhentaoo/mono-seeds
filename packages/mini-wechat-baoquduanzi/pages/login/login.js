import sha1 from '../../utils/sha1.js'
import util from '../../utils/util.js'
const app = getApp()
var limit = 15
var offset = 0

var seed = util.formatTime(new Date()) + 'b61d91ea6c3'
var code = sha1.sha1(seed)
var key = code.substr(-15)

Page({
  data: {
    userInfo: {}
  },
  onReady: function () {
    let data = wx.getStorageSync('userInfo')
    if (data) {
      this.setData({
        userInfo: data
      })
      wx.redirectTo({
        url: '../index/index'
      })
    }
  },
  bindViewTap: function(e) {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  getUserInfo: function (e) {
    let openid = null
    let userInfo = e.detail.userInfo

    wx.login({
      // 登录获取用户省份标示
      success: function (res) {
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
              wx.redirectTo({
                url: '../index/index'
              })
            },
            fail: (err) => {
              wx.hideNavigationBarLoading()
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    
  }
})
