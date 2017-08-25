Page({

  /**
   * 页面的初始数据
   */
  data: {},
  savephone(event) {
    this.setData({
      phone: event.detail.value
    });
  },
  savepsw(event) {
    this.setData({
      psw: event.detail.value
    });

  },
  login() {
    wx.request({
      url: 'https://www.renjing.xin/index/index/login',
      data: {
        username: this.data.phone,
        password: this.data.psw
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: res => {
        console.log(res)
        wx.setStorageSync('islogin', true);
        wx.setStorageSync('memberinfo', res.data.result);
        wx.reLaunch({
          url: "../index/index"
        })

      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
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