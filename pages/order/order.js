const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ordermsg: {},
    empty: ''
  },
  savename(event) {
    this.setData({
      name: event.detail.value
    })
  },
  savephone(event) {
    if (!app.checkph.test(event.detail.value)) {
      wx.showToast({
        title: '手机号码格式错误，请核实后重新输入',
        duration: 2000,
        image: this.data.error_src
      });
      this.setData({
        empty: ''
      })
      return;
    };
    this.setData({
      phone: event.detail.value
    })
  },
  test() {},
  pay() {
    let obj = {
      // name: this.data.name,
      // phone: this.data.phone,
      roomtime: `${this.data.ordermsg[0][1]}至${this.data.ordermsg[1][1]}`,
      // days: this.data.ordermsg[2][1],
      // roomtype: this.data.ordermsg[3][1],
      roomtype: this.data.ordermsg[4][1],
      roomprice: this.data.ordermsg[5][1]
    };
    wx.request({
      url: 'https://www.renjing.xin/index/index/pay',
      data: obj,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        //发起网络请求
        wx.request({
          url: res.data,
          success(res) {
            console.log(res)
          }
        })
      },
    })
  },
  onLoad: function (options) {
    const obj = wx.getStorageSync('ordermsg');
    this.setData({
      ordermsg: obj
    });
    let m = 29,
      s = 60;
    let time = setInterval(() => {
      s--;
      s = s < 10 ? `0${s}` : s;
      if (m == 0 && s == 0) {
        clearInterval(time);
        return;
      }
      if (s == 0) {
        s = 60;
        m--;
        m = m < 0 ? 0 : m;
        m = m < 10 ? `0${m}` : m;

      };
      this.setData({
        m: m,
        s: s
      });
    }, 1000);
    // wx.login({
    //   success: function (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://www.renjing.xin/index/index/pay',
    //         data: {
    //           code: res.code
    //         },
    //         method:'GET',
    //         success(res) {
    //           console.log(res);
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
    console.log(app.globalData.userInfo);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})