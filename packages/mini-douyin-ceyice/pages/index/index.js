Page({
  data: {
    pickerHidden: true,
    chosen: ''
  },
  formSubmit: function (e) {
    // debugger

    if (!e.detail.value.yourname) {
      tt.showToast({
        title: "请填写你的名字",
        duration: 2000,
        icon: 'none',
        success(res) {
          console.log(`${res}`);
        },
        fail(res) {
          console.log(`showToast调用失败`);
        }
      });
    } else if(/[\u4e00-\u9fa5]/.test(e.detail.value.yourname) === false) {
       tt.showToast({
        title: "请填写中文名",
        duration: 2000,
        icon: 'none',
        success(res) {
          console.log(`${res}`);
        },
        fail(res) {
          console.log(`showToast调用失败`);
        }
      });
    }
    else if (!e.detail.value.itname) {
      tt.showToast({
        title: "请填写ta的名字",
        duration: 2000,
        icon: 'none',
        success(res) {
          console.log(`${res}`);
        },
        fail(res) {
          console.log(`showToast调用失败`);
        }
      });
    } 
    else if(/[\u4e00-\u9fa5]/.test(e.detail.value.itname) === false) {
      tt.showToast({
        title: "请填写中文名",
        duration: 2000,
        icon: 'none',
        success(res) {
          console.log(`${res}`);
        },
        fail(res) {
          console.log(`showToast调用失败`);
        }
      });
    }
    else {
      tt.setStorage({
        key: "userData",
        data: {
          yourname: e.detail.value.yourname,
          itname: e.detail.value.itname,
        },
        success(res) {
          console.log(`set seen ad flag`);
        },
        fail(res) {
          console.log(`setStorage调用失败`);
        }
      });

      // tt.redirectTo({
      //   url: '../result/index',
      // })

      this.showAd();
    }

  },
  showAd() {
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
      }
    })
  },
  formReset: function (e) {
    this.setData({
      chosen: ''
    })
  }
})
