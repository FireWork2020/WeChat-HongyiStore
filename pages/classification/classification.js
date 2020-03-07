// miniprogram/pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    onLoadStatus:true,
    curNav:0,
    // menus:[
    //   {
    //     name:"衣服",
    //     children:[
    //       {
    //         name:"上衣"
    //       },
    //       {
    //         name:"下衣"
    //       }
    //     ]
    //   },
    //   {
    //     name: "化妆品"
    //   },
    //   {
    //     name: "食物"
    //   }
    // ]
    menus:[]
  },
  showSelectedChildMenu: function (e) {
    let index = parseInt(e.target.dataset.index);
    console.log(index)
    this.setData({
      curNav: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url:'http://localhost:8080/menu/allmenus',
      data:{
        menuId:1
      },
      success(res){
        console.log(res);
        _this.setData({
          menus: res.data
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