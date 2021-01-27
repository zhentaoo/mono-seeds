Page({
  data: {
    yourname: null,
    itname: null,
    number: 0,
    data: '',
  },
  onLoad() {
    debugger
    tt.getStorage({
      key: "userData",
      success: (res) => {
        this.setData({
          yourname: res.data.yourname,
          itname: res.data.itname,
        })
      },
      fail: (res) => {
        console.log(`getStorage调用失败`);
      }
    });
    var num = Math.floor(Math.random() * 100);
    if(num < 40) {
      num = num + 41;
    }

    if (num > 40 && num <= 50) {
      this.setData({
        data: '缘分签语巫山云雨寒岩冷，梦境依稀令人愁。注解：有缘无分之人，以后也会在无尽的思念中'
      })
    }
    else if (num > 50 && num <= 60) {
      this.setData({
        data: '钟情已到相思路，执手相看两无言。注解：金风玉露之缘，牛郎织女七夕会'
      })
    }
    else if (num > 60 && num <= 70) {
      this.setData({
        data: '君为明月我为星，夜空皎洁相辉映。注解：心心相应的异性朋友，并不一定要走进婚姻的殿堂'
      })
    }
    else if (num > 70 && num <= 80) {
      this.setData({
        data: '愿为彩凤双飞鸟，心有灵犀两相通。注解：令人羡慕的一对，要小心维护感情'
      })
    }
    else if (num > 80 && num <= 90) {
      this.setData({
        data: '两情相知久长时，不羡暮暮与朝朝。注解：红颜知己之缘，不能夫妻也可以成为朋友'
      })
    }
    else if (num > 90 && num <= 100) {
      this.setData({
        data: '天作之合，十全十美。注解：你们是天造地设的一对，祝你们天长地久'
      })
    }


    this.setData({
      num: num
    })
  },
  jump() {
    tt.redirectTo({
      // url: '../ads/index',
      url: '../index/index',
    })
  }
})
