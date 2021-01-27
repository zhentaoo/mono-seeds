//获取应用实例
import touxiang from '../../touxiang/touxiang.js'
import sha1 from '../../utils/sha1.js'
import util from '../../utils/util.js'
const app = getApp()
var limit = 15
var offset = 0

var seed = util.formatTime(new Date()) + 'b61d91ea6c3'
var code = sha1.sha1(seed)
var key = code.substr(-15)
// touxiang = touxiang.default

Page({
  data: {
    item: [],
    discuss: []
  },
  preview: function (e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.imgurl],
    })
  },
  onShow: function () {
    let duanzi = JSON.parse(wx.getStorageSync('duanzi'))

    let discuss = duanzi.discuss
    // let discuss = '[" \\t\\n把B接我装一下 251381\\n一鞠躬，二鞠躬，三鞠躬，家属回礼，礼毕封棺\\n"," \\t\\n萌萌哒的俏贝儿 19582\\n楼主已死，有事烧纸，小事招魂，大事刨坟！\\n"," \\t\\n～叶孤城～ 36206\\n老虎你发这帖会害死多少男同胞知道不？那些如狼似虎的女糗友肯定会依葫芦画瓢的……\\n"," \\t\\n分腿大师 34123\\n换个角度想，有可能楼主老婆把套出来的那几个桑拿经理的电话拉黑，再好的活也不接了？\\n"," \\t\\n晓糖浅尝～ 84101\\n我终于知道什么叫：放长线、钓大鱼了！！！\\n"," \\t\\n煙花三月下扬州 9079\\n您的花圈还有30秒到达坟场！！！\\n"," \\t\\n小黑猪的老公 3974\\n惨了!惨了！老虎遇到打猎人了……糗友联名呼吁，老虎属于国家保护动物，严禁捕杀!\\n"," \\t\\n胸平浪静 2561\\n楼主:看在我这么真诚的份上，让我安乐死吧！\\n"," \\t\\n小黑猪的老公 3950\\n人家娶妻是婆姨跟汉，老虎娶妻是鬼和判!\\n"," \\t\\n屏幕飘来八个字儿 335\\n老乡开门啊，我们不是坏人。我们有组织有纪律，不拿人民一针一线，你开门啊老乡！再不开门我们开枪了！呵呵，老乡啊，你总算开门了啊。兄弟们，除了针线，其它全搬走！哟，老乡，你还有个闺女啊…\\n"]'

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
    }
    
    this.setData({
      item: duanzi,
      discuss: discuss
    })
  }
  
})