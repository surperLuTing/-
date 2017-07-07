// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     items:[
       { name: 'check1', value: '1' },
       { name: 'check2', value: '2' ,checked:'true'},
       { name: 'check3', value: '3' },
       { name: 'check4', value: '4' },
       { name: 'check5', value: '5' }
     ]
  },
  ChangeCheck:function(e){
    console.log("发生change事件，value值为", e.detail.value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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