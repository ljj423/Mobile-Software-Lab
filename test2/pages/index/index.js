Page({

  data: {
    src:'/images/R-C.png',
    name:'Hello World'
  },
  
  getMyInfo:function(e){
    wx.getUserProfile({
      desc: '展示个人信息',
      success :(res) => {
          console.log(res)
          this.setData({
              src: res.userInfo.avatarUrl,
              name: res.userInfo.nickName
          })
      }
    })
  }
})