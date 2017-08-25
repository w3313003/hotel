Page({
    data: {
        navBar: [{
            type: '全部订单',
            isclick: true
        }, {
            type: '待支付',
            isclick: false
        }, {
            type: '待入住',
            isclick: false
        }, {
            type: '待评价',
            isclick: false
        }, {
            type: '已评价',
            isclick: false
        }],
        animate: {},
        itemList: [],
        isALL: true,
        isItem: false,
        ordermsg: []
    },
    togglenav(event) {
        var animates = wx.createAnimation({
            duration: 500,
        });
        animates.translate(400).opacity(0).step();
        animates.opacity(1).translate(0).step();
        this.setData({
            animate: animates.export()
        })
        this.setData({
            itemList: [],
            isALL: false
        });
        this.data.navBar.forEach((v, i) => {
            if (event.currentTarget.dataset.type == v.type) {
                for (let i of this.data.navBar) {
                    i.isclick = false;
                };
                v.isclick = true;
                if (event.currentTarget.dataset.type == '全部订单') {
                    this.setData({
                        isALL: true,
                        isItem: false,
                        navBar: this.data.navBar,
                    })
                } else {
                    this.data.ordermsg.forEach(v => {
                        if (v.status == event.currentTarget.dataset.type) {
                            this.data.itemList.push(v);
                        }
                        this.setData({
                            isALL: false,
                            isItem: true,
                            itemList: this.data.itemList,
                            navBar: this.data.navBar
                        })
                    })
                }

            };
        });
    },
    getrating(event){
        let msg = event.currentTarget.dataset.msg;
        wx.setStorageSync('currentroom', msg);
        wx.navigateTo({
            url:'/pages/rating/rating'
        })
    },
    onLoad: function (options) {
        const userph = wx.getStorageSync('memberinfo').phone;
        wx.request({
            url: 'https://www.renjing.xin/index/usercenter/orderct',
            data: {
                 phone: userph,
            },
            method: 'POST', // OPTIONS,  GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的header
            success:res=>{
                // success
                console.log(res.data)
                this.setData({
                    ordermsg:res.data
                })
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
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