Page({
    data: {
        rList: [{
            id: 15677779999,
            content: "你好你好你好你好",
            sellercontent: '嘻嘻嘻嘻嘻i嘻嘻嘻嘻',
            score: 4,
            time: '2015-05-05 17:44',
            sellertime: '2015-05-05 17:44'
        }, {
            id: 1432423,
            content: "是短发散发的撒打算大神大神大神大神大神阿萨德阿萨德奥迪奥迪的 ",
            score: 3,
            time: '2015-05-05 17:44',
        }, {
            id: 15677779999,
            content: "你好你好你好你好",
            score: 2,
            time: '2015-05-05 17:44',
        }, {
            id: 15677779999,
            content: "你好你好你好你好",
            sellercontent: '嘻嘻嘻嘻嘻i嘻嘻嘻嘻',
            score: 1,
            time: '2015-05-05 17:44',
            sellertime: '2022-01-05 17:44'
        }],
        animate: {},
        roomtype: [],
        tips: true
    },
    descToggle(event) {
        this.data.roomtype.forEach((v, i) => {
            v.isclick = false;
            this.setData({
                roomtype: this.data.roomtype
            });
            if (event.currentTarget.dataset.roomnav === v.roomnav) {
                for (let i of this.data.roomtype) {
                    i.isclick = false;
                }
                this.data.roomtype[i].isclick = true;
                setTimeout(() => {
                    var imgarr =  this.data.roomtype[i].pic.match(/\/uploads\S+\.(jpg(?=")|png(?="))/g);
                    let newarr = [];
                    imgarr.forEach(v => {
                        v = `https://www.renjing.xin${v}`;
                        newarr.push(v);
                    });
                    this.setData({
                        pic: newarr,
                        roomtype: this.data.roomtype,
                        floor: this.data.roomtype[i].floor,
                        area: this.data.roomtype[i].area,
                        bed: this.data.roomtype[i].bed,
                        number: this.data.roomtype[i].maxroom,
                        extrabed: this.data.roomtype[i].extrabed,
                        window: this.data.roomtype[i].window,
                        wash: this.data.roomtype[i].wash,
                        inter: this.data.roomtype[i].inter,
                        price: this.data.roomtype[i].roomprice
                    });
                }, 250);
            } else {
                return;
            }
            var animates = wx.createAnimation({
                duration: 500,
            });
            animates.scale(0).opacity(0).step();
            animates.opacity(1).scale(1).step();
            this.setData({
                animate: animates.export()
            })
        });
    },
    test(e) {
        console.log(e.currentTarget.dataset.item)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            roomtype: wx.getStorageSync('roomtype')
        });
                console.log(this.data.roomtype)
        // let imgarr = this.data.roomtype.pic.match(/\/uploads\S+\.jpg(?=")/g);
        this.data.roomtype.forEach(v => {
            if (v.isclick == true) {
                var imgarr = v.pic.match(/\/uploads\S+\.(jpg(?=")|png(?="))/g);
                let newarr = [];
                imgarr.forEach(v => {
                    v = `https://www.renjing.xin${v}`;
                    newarr.push(v);
                });
                this.setData({
                    pic: newarr,
                    floor: v.floor,
                    area: v.area,
                    bed: v.bed,
                    number: v.maxroom,
                    extrabed: JSON.parse(v.broadband),
                    window: JSON.parse(v.window),
                    wash: JSON.parse(v.bathroom),
                    inter: JSON.parse(v.broadband),
                    price: v.roomprice,
                    wifi: JSON.parse(v.wifi)
                });
            }
        });
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