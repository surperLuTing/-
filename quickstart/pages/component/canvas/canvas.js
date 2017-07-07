// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createContext 获取绘图上下文 content

    var content = wx.createCanvasContext('seconedCanvas')
    content.setStrokeStyle("pink");
    content.setLineWidth(10);
    content.rect(10,10,200,200);
    content.stroke();
    content.setStrokeStyle("blue");
    content.setLineWidth(3);
    content.moveTo(170,110);
    content.arc(110,110,60,0,2*Math.PI,true);
    content.moveTo(150,110)
    content.arc(110,110,40,0,Math.PI,false);
    content.moveTo(95,90);
    content.arc(90,90,5,0,2*Math.PI,true);
    content.moveTo(135,90);
    content.arc(130,90,5,0,2*Math.PI,true)
    content.stroke();
    content.draw()
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