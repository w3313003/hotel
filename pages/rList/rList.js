Page({

  /**
   * 页面的初始数据
   */
  data: {
    rList:[{
      id:15677779999,
      content:"你好你好你好你好",
      sellercontent: '嘻嘻嘻嘻嘻i嘻嘻嘻嘻',
      score:4,
      time:'2015-05-05 17:44',
      sellertime:'2015-05-05 17:44'
    },{
      id:1432423,
      content:"是短发散发的撒打算大神大神大神大神大神阿萨德阿萨德奥迪奥迪的 ",
      score:3,
      time:'2015-05-05 17:44',
    },{
      id:15677779999,
      content:"你好你好你好你好",
      score:2,
      time:'2015-05-05 17:44',
    },{
      id:15677779999,
      content:"你好你好你好你好",
      sellercontent: '嘻嘻嘻嘻嘻i嘻嘻嘻嘻',
      score:1,
      time:'2015-05-05 17:44',
      sellertime:'2022-01-05 17:44'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.rList.forEach(v=>{
       let id = new String(v.id);
       v.id = id.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    });
    this.setData({
      rList : this.data.rList
    })
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