Page({

  /**
   * 页面的初始数据
   */
  data: {
    ratingstar: [{
      i: 0,
      isactive: false,
    }, {
      i: 1,
      isactive: false,
    }, {
      i: 2,
      isactive: false,
    }, {
      i: 3,
      isactive: false,
    }, {
      i: 4,
      isactive: false,
    }]
  },
  ratingstar(event) {
    let i = event.currentTarget.dataset.index;
    for (let k of this.data.ratingstar) {
      k.isactive = false;
    };
    this.setData({
      ratingstar: this.data.ratingstar
    });
    for (let j = 0; j <= i; j++) {
      this.data.ratingstar[j].isactive = true;
    };
    this.setData({
      ratingstar: this.data.ratingstar,
      score: i + 1
    });
  },
  savecontent(event) {
    this.setData({
      content: event.detail.value
    })
  },
  send() {
    wx.request({
      url: 'https://www.renjing.xin/index/usercenter/message',
      method: 'POST',
      data: {
        score: this.data.score,
        phone: this.data.msg.phone,
        content: this.data.content,
        name: this.data.msg.roomsum
      },
      success: res => {
        console.log(res.data)
        if (res.data.tinfo === '评价成功') {
          wx.request({
            url: 'https://www.renjing.xin/index/usercenter/updates',
            method: 'POST',
            data: {
              status: '已评价',
              ordernum: this.data.msg.ordernum
            },
            success: res => {
              wx.showToast({
                title: '评价成功',
                duration: 2000
              });
              setTimeout(() => {
                wx.reLaunch({
                  url: '/pages/menbercenter/menbercenter'
                }, 2000)
              })

            }
          })

        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let msg = wx.getStorageSync('currentroom');
    this.setData({
      msg: msg
    });
    console.log(msg)
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