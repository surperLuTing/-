// pages/api/request/request.js
var Data;
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
     Info:{}
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    var that=this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method:'GET',
      success: function (res) {
        console.log(res.data.others);
       that.setData({
         Info:res.data.others,
        
      
       })
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