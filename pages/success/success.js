Page({
    data:{
    
    },
    test(){
        wx.reLaunch({
            url: '/pages/index/index',
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
})