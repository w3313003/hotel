Page({
  data: {
    scale: 17,
    longitude: 117.263230,
    latitude: 31.841250,
    controls: [{
      iconPath: "/static/img/controls.png",
      position: {
        left: 0,
        top: 200,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    markers: [{
      callout: {
        content: "维多利亚酒店",
        borderRadius: 15,
        color: "#ffffff",
        bgColor: '#004483',
        padding: 5
      },
      iconPath: "/static/img/location.png",
      id: 0,
      latitude: 31.841250,
      longitude: 117.263230,
      width: 40,
      height: 40
    }],
    circles: [{
      latitude: 31.841250,
      longitude: 117.263230,
      radius: 150,
      fillColor: '#ffffff01',
      color: '#004483AA',
      strokeWidth: 0.1
    }]
  },
  test() {
    this.mapCtx.moveToLocation();
  },
  test1() {
    console.log(1);
  },
  back() {
    wx.openLocation({
      latitude: 31.841250,
      longitude: 117.263230,
      name: '维多利亚酒店',
      address: '维多利亚酒店',
      success() {}
    })
  },
  con(e) {
    console.log(e)
  },
  onLoad() {
    wx.openLocation({
      latitude: 31.841250,
      longitude: 117.263230,
      name: '维多利亚酒店',
      address: '维多利亚酒店',
      success() {}
    })

    let that = this;
    this.mapCtx = wx.createMapContext('map1');
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        that.setData({
          mlongitude: res.longitude,
          mlatitude: res.latitude
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})