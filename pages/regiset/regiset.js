Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown: 60,
    getcode: true,
    empty: '',
    error_src: '/static/img/error.png'
  },
  savephone(event) {
    var app = getApp();
    if (!app.checkph.test(event.detail.value) && event.detail.value.length > 0) {
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
  },
  savepsw(event) {
    if (event.detail.value.length < 5 && event.detail.value.length>0) {
      wx.showToast({
        title: '密码至少5位',
        duration: 2000,
        image: this.data.error_src
      });
      this.setData({
        empty: ''
      })
      return;
    }
    this.setData({
      psw: event.detail.value
    });
  },
  saverpsw(event) {
    if ((this.data.psw !== event.detail.value) && event.detail.value.length > 0) {
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
  savename(event) {
    this.setData({
      username: event.detail.value
    })
  },
  saveid(event) {
    this.setData({
      id: event.detail.value
    })
  },
  getcode(event) {
    if (this.data.phone != undefined) {
      wx.request({
        url: 'https://www.renjing.xin/index/index/mobiles',
        data: {
          mobile: this.data.phone
        },
        method: 'POST',
        success:res=>{
          console.log(res)
        }
      });
      this.setData({
        getcode: false
      })
      let time = setInterval(() => {
        if (this.data.countdown == 0) {
          this.setData({
            getcode: true,
            countdown: 60
          });
          clearInterval(time);
        }
        this.data.countdown--;
        this.setData({
          countdown: this.data.countdown
        });
      }, 100);
    } else {
      wx.showToast({
        title: '手机号码不能为空',
        duration: 2000,
        image: this.data.error_src
      })
    }
  },
  savecode(event){
    if(event.detail.value.length>0){
      this.setData({
        code: event.detail.value,
        getcode: false
      });
    }
  },
  Regiset() {
    console.log(this.data.phone != undefined)
    if (this.data.phone != undefined && this.data.psw != undefined && this.data.rpsw != undefined && this.data.username != undefined && this.data.id != undefined && this.data.code != undefined) {
      wx.request({
        url: 'https://www.renjing.xin/index/index/register',
        data: {
          phone: this.data.phone,
          password: this.data.psw,
          username: this.data.username,
          idcard: this.data.id,
          code: this.data.code
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          if(res.data){

          }
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    } else {
      wx.showToast({
        title: '请完善信息后重新注册',
        duration: 2000,
        image: this.data.error_src
      })
    }
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