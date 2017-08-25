const app = getApp();
Page({
  data: {
    info: [{
      type: '手机号码',
      value: 15564443434
    }, {
      type: '姓名',
      value: '张三丰'
    }, {
      type: '身份证号码',
      value: '333333333333333333'
    }, {
      type: '微信名',
      value: 'cccc'
    }]
  },
  onLoad: function (options) {
    const userinfo = wx.getStorageSync('memberinfo'),
      //       ph = new String(userinfo.phone).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'),
      //       id = new String(userinfo.idcard).replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
      //       userinfo.idcard = id;
      // this.setData({
      //     userinfo : userinfo
      // })

      ph = new String(userinfo.phone).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'),
      id = new String(userinfo.idcard).replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
    let obj = this.data.info;
    obj[0].value = ph;
    obj[2].value = id;
    obj[3].value = app.globalData.userInfo.nickName;
    this.setData({
      info: obj
    });
    console.log(app.globalData.userInfo)

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