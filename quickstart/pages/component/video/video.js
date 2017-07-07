// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  InputValue:'',
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.myVideo=wx.createVideoContext('myVideo');
  },
  changePlay:function(){
    this.myVideo.play();
  },
  changePause:function(){
    this.myVideo.pause();
  },
  BeginPlay:function(){
    this.myVideo.seek(0);
    this.myVideo.play();
  },
  Begin10:function(){
    this.myVideo.seek(10);
    this.myVideo.play();
  },
  SendDanmu:function(){
    if (this.InputValue!=""){
      this.myVideo.sendDanmu({
        text: this.InputValue,
        color: "orange"
      })
    }  
  },
  bindInputblur:function(e){
    this.InputValue = e.detail.value;
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