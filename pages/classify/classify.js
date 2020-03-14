// miniprogram/pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav:1,
    curIndex:0,
    menus:[],
    baseUrl:'http://localhost:8080/menu/menuImg?imgName=',
    classifyItems:[
      {
        id:1,
        name:'个人护理',
        isHaveChild:false,
        shopClassifyDtoList:[]
      },
      {
        id: 2,
        name: '护肤彩妆',
        isHaveChild: true,
        shopClassifyDtoList: [
          {
            id: 6,
            name: '口红',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583855222514&di=1b993123f281afee28fb7afc4bb35390&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F94%2F36%2F5ac49bb9a3da1_610.jpg'
          },
          {
            id: 7,
            name: '洗面奶',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583855344630&di=13e17cc268edabdbe8aba28da56bff0b&imgtype=0&src=http%3A%2F%2Fimage3.suning.cn%2Fb2c%2Fcatentries%2F000000000608290567_3_800x800.jpg'
          },
          {
            id: 8,
            name: '爽肤水',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583855367570&di=a076d4da30426280ccd01c52612c6ac1&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2039459982%2C326744091%26fm%3D214%26gp%3D0.jpg'
          }
        ]
      },
      {
        id: 3,
        name: '母婴',
        isHaveChild: false,
        shopClassifyDtoList: [
        ]
      },
      {
        id: 4,
        name: '护肤',
        isHaveChild: false,
        shopClassifyDtoList: [
        ]
      }
    ]
  },

  switchRightTab: function (e){
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    console.log('id:'+id + 'index' + index);
    this.setData({
      curNav:index,
      curIndex:index
    })
  },
  getMenus:function(e){
    const that = this;
    wx.request({
      url: 'http://localhost:8080/menu/allmenus',
      success(res) {
        console.log(res);
        that.setData({
          menus: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMenus();
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