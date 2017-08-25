const app = getApp();
Page({
  data: {
    motto: 'hello World',
    src: '../.././static/img/bg.png',
    addimg: '../.././static/img/add.png',
    daddimg: '../.././static/img/dadd.png',
    lessimg: '../.././static/img/less.png',
    condition: false,
    userInfo: {},
    hasUserInfo: false,
    ordermessage: [],
    totalprice: 0,
    totalsum: 0,
    roomtype: [],
    maskshow: false
  },
  roomDetail(event) {
    this.data.roomtype.forEach((v, i) => {
      if (v.roomnav === event.currentTarget.dataset.roomnav) {
        for (let i of this.data.roomtype) {
          i.isclick = false;
        };
        this.data.roomtype[i].isclick = true;
        this.setData({
          roomtype: this.data.roomtype
        })
        wx.setStorageSync('roomtype', this.data.roomtype);
      }
    });
    wx.navigateTo({
      url: '../roommessage/roommessage'
    })
  },
  getorder() {
    if (this.data.days < 1 || this.data.totalprice < 1) {
      if (this.data.days == 0) {
        wx.showToast({
          title: '请选择正确日期',
          image: "/static/img/error.png"
        });
        return;
      } else {
        wx.showToast({
          title: '至少选择一间房',
          image: "/static/img/error.png"
        });
        return;
      }
    };
    wx.showModal({
      title: '温馨提示',
      content: '在线预订，不支持在线退房',
      success: res => {
        if (res.confirm) {
          let ordermsg = {
            '入住时间': this.data.date,
            '离店时间': this.data.nextdate,
            '入住天数': this.data.days,
            '房间信息': this.data.orderStr,
            '房间数量': this.data.totalsum,
            '房费总计': this.data.totalprice * this.data.days
          };

          function entries(obj) {
            let arr = [];
            for (let key of Object.keys(obj)) {
              arr.push([key, obj[key]]);
            }
            return arr;
          };
          let arr = entries(ordermsg);
          wx.setStorageSync('ordermsg', arr);
          wx.navigateTo({
            url: "/pages/order/order",
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  stoppropagation() {
    return;
  },
  login() {
    wx.navigateTo({
      url: "../login/login"
    })

  },
  rtshow() {
    this.data.roomtype.forEach(v => {
      v.sum = 0;
    })
    this.setData({
      maskshow: true,
      ordermessage: [],
      roomtype: this.data.roomtype,
      totalsum: 0,
      totalprice: 0
    })
  },
  closemask() {
    this.data.roomtype.forEach(v => {
      if (v.sum > 0) {
        let str = `${v.roomnav}(${v.sum}间)`;
        this.data.ordermessage.push(str);
        this.data.totalsum += v.sum;
        this.data.totalprice += (v.roomprice * v.sum);
      }
    });
    let totalprice = this.data.totalprice,
      ntotalprice = Number(totalprice) * this.data.days;
    let orderStr = this.data.ordermessage.join(';')
    this.setData({
      maskshow: false,
      ordermessage: this.data.ordermessage,
      totalsum: this.data.totalsum,
      totalprice: this.data.totalprice.toFixed(2),
      orderStr: orderStr
    });
  },
  add(event) {
    this.data.roomtype.forEach(v => {
      if (v.roomnav === event.currentTarget.dataset.roomnav) {
        if (v.sum >= v.sroom) {
          wx.showToast({
            title: `该房型仅剩${v.sum}间`,
            image: '/static/img/error.png'
          });
          return;
        }
        v.sum++;
      }
    });
    this.setData({
      roomtype: this.data.roomtype
    })
  },
  less(event) {
    this.data.roomtype.forEach(v => {
      if (v.roomnav === event.currentTarget.dataset.roomnav) {
        if (v.sum === 0) {
          return;
        }
        v.sum--;
      }
    });
    this.setData({
      roomtype: this.data.roomtype
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
    let day = (Date.parse(this.data.nextdate) - Date.parse(this.data.date)) / 1000 / 60 / 60 / 24;
    if (day < 1) {
      wx.showToast({
        title: '日期选择错误',
        duration: 3000,
        image: "/static/img/error.png",
        mask: true
      });
      this.setData({
        days: 0
      })
      return;
    }
    this.setData({
      days: day
    })
  },
  nextDateChange: function (e) {
    let num = e.detail.value;
    this.setData({
      nextdate: e.detail.value
    });
    let day = (Date.parse(this.data.nextdate) - Date.parse(this.data.date)) / 1000 / 60 / 60 / 24;
    if (day < 1) {
      wx.showToast({
        title: '日期选择错误，请重新选择请重新选择',
        duration: 3000,
        image: '/static/img/error.png',
        mask: true
      });
      this.setData({
        days: 0
      })
      return;
    };
    this.setData({
      days: day
    });
    wx.showToast({
      title: '日期选择成功',
      icon: "success"
    });
    console.log(this.data.days)
  },
  onLoad() {
    console.log(213123)
    let date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      fm = m >= 10 ? m : `0${m}`,
      fd = d >= 10 ? d : `0${d}`,
      formatDate = `${y}-${fm}-${fd}`;
    let nextdate = new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24),
      ny = nextdate.getFullYear(),
      nm = nextdate.getMonth() + 1,
      nd = nextdate.getDate(),
      fnm = nm >= 10 ? nm : `0${nm}`,
      fnd = nd >= 10 ? nd : `0${nd}`,
      nformatDate = `${ny}-${fnm}-${fnd}`;
    this.setData({
      date: formatDate,
      nextdate: nformatDate,
      date1: formatDate,
      nextdate2: nformatDate
    });
    let day = (Date.parse(this.data.nextdate) - Date.parse(this.data.date)) / 1000 / 60 / 60 / 24;
    this.setData({
      days: day
    });
    wx.request({
      url: 'https://www.renjing.xin/index/index/index',
      data: {},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: res => {
        // success
        console.log(res.data)
        this.setData({
          roomtype: res.data
        });
        this.data.roomtype.forEach((val, index) => {
          val.sum = 0;
          val.index = index;
        });

      },
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow() {
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'linear'
    });
    this.animation = animation;
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})