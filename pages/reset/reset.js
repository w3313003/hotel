Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown: 60,
    getcode: true,
    empty: '',
    error_src:'/static/img/error.png'
  },
  savephone(event) {
    var app = getApp();
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
    }
    this.setData({
      phone: event.detail.value
    });
    console.log(this.data.phone)
  },
  savepsw(event) {
    this.setData({
      psw: event.detail.value
    });
  },
  saverpsw(event) {
    if (this.data.psw !== event.detail.value) {
      wx.showToast({
        title: '两次输入的密码不一致,请重新输入',
        duration: 2000,
        image: this.data.error_src
      });
      this.setData({
        empty: ''
      })
      return;
    } else {
      this.setData({
        rpsw: event.detail.value
      })
    }
  },
  getcode() {
    this.setData({
      getcode: false
    });
    let time = setInterval(() => {
      if (this.data.countdown == 0) {
        this.setData({
          getcode: true,
          countdown:60
        });
        clearInterval(time);
      }
      this.data.countdown--;
      this.setData({
        countdown: this.data.countdown
      });
    }, 100);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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