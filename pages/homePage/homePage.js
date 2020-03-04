// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"", //搜索框内容
    imgUrls:[],
    recommendGoodList:[]
  },

  getRecommendGoods(){
    let that = this;
    let goodList = [];
    wx.request({
      url: 'http://localhost:8080/goods/recommend/getRecommendGoods',
      success(res){
        let recommendList = res.data.data;
        console.log("返回数据如下");
        console.log(recommendList);
        for(let i = 0;i < recommendList.length;i++){
          let good = recommendList[i];
          goodList.push(good);
        }
        console.log(goodList);
        console.log("准备设置data");
        console.log(that.data.recommendGoodList);
        that.setData({
          recommendGoodList:goodList
        })
        console.log("设置完成效果如下");
        console.log(that.data.recommendGoodList);
      },faile(res){
        console.log("请求失败");
      }
    })
  },
  getSwiperImgUrls(){
    let that = this;
    let imgArr = [];
    wx.request({
      url: 'http://localhost:8080/swiperImage/getSwiperImgNames',
      success(res){
        let nameList = res.data;
        console.log(nameList);
        for(let i = 0;i < nameList.length;i++){
          let imgBaseUrl = 'http://localhost:8080/swiperImage/getSwiperImg/'
          imgArr.push(imgBaseUrl + nameList[i]);
        }
        console.log(imgArr);
        that.setData({
          imgUrls:imgArr
        })
      },
      fail(res){
        console.log("请求失败",res);
      }
    })


  },
  test(){
    var that = this;
    console.log(that.data.recommendGoodList);
  },
  bindInput(e){
    this.setData({
      inputVal:e.detail.value
    })
  },
  bindConfirm(e){
    this.setData({
      inputVal:e.detail.value
    })
    wx.navigateTo({
      url: '/pages/', //写好物品page后再修改***************************************此处待修改
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperImgUrls();
    this.getRecommendGoods();
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