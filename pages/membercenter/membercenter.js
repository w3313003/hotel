Page({
    data: {
    },
    location () {
        wx.openLocation({
            latitude: 31.841250,
            longitude: 117.263230,
            name: '维多利亚酒店',
            address: '维多利亚酒店',
            scale:18
        })
    },
    onLoad(){
        const userinfo = wx.getStorageSync('memberinfo'),

              id = new String(userinfo.idcard).replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
              userinfo.idcard = id;
        this.setData({
            userinfo : userinfo
        })
    }
})