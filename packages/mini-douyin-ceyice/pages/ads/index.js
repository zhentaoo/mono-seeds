Page({
  adclosehandler() {

  },
  aderrorhandler(err) {
    alert(err);
  },
  adloadhandler() {
    console.log('111')
  },
  onLoad() {
    // debugger
    var videoAd = tt.createRewardedVideoAd({ adUnitId: 'eotm9qb3c593mqq9n0' });
    videoAd
      .show()
      .then(() => {
        console.log("广告显示成功");
      })
      .catch(err => {
        console.log("广告组件出现问题", err);
        // 可以手动加载一次
        videoAd.load().then(() => {
          console.log("手动加载成功");
          // 加载成功后需要再显示广告
          return videoAd.show();
        });
      });

    videoAd.onClose(res => {
      if (res.isEnded) {
        tt.redirectTo({
          // url: '../ads/index',
          url: '../result/index',
        })
      } else {
        tt.redirectTo({
          // url: '../ads/index',
          url: '../index/index',
        })
      }
    })
  },
})
