//app.js
App({
  checkph: /^1[34578]\d{9}$/,
  onLaunch: function () {
    if (!wx.getStorageSync('islogin')) {
      wx.reLaunch({
        url: '/pages/login/login',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    };
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: res => {
        // if (res.code) {
        //   console.log(4444);
        //   let str = res.code;
        //   console.log(str)
        //   wx.request({
        //     url: 'https://www.renjing.xin/index/index/info',
        //     data: {
        //       code: str
        //     },
        //     success: function (res) {
        //       // success
        //       console.log(res.data)
        //     },
        //     fail: function () {
        //       // fail
        //     },
        //     complete: function () {
        //       // complete
        //     }
        //   })
        // } else {
        //   console.log(999)
        // }

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取openid;

  },
  globalData: {
    userInfo: null
  }
})