Page({

    /**
     * 页面的初始数据
     */
    data: {
        region:['山东省','青岛市','黄岛区'],
        now:{
            temp:0,
            text:'未知',
            icon:'999',
            humidity:0,
            pressure:0,
            vis:0,
            windDir:0,
            windScale:0,
            windSpeed:0
        }
    },
    regionChange:function(e){
        this.setData({region: e.detail.value});
        this.getWeather();
    },
    getWeather:function(){
      var that=this;
      var utils = require('../../util.js');
      wx.request({
          url: 'https://mb2r6wn66h.re.qweatherapi.com/v7/weather/now',
          data: {
              location: utils.getLocationID(that.data.region[1]),
              key: 'c1c0a4c3010e40f09cf18d7dc227be27'
          },
          success: function(res) {
            that.setData({now:res.data.now});
          },
      });
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getWeather();
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