// miniprogram/pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav:1,
    curIndex:0,
    //menus:[],
    baseUrl:'http://localhost:8080/menu/menuImg?imgName=',
    menus:[
      {
        id:1,
        name:'洗护',
        isHaveChild:true,
        children:[
          {
            id: 6,
            name: '护肤套装',
            imgUrl: '../../images/classify/1-1.jpg'
          },
          {
            id: 6,
            name: '面霜',
            imgUrl: '../../images/classify/1-2.jpg'
          },
          {
            id: 6,
            name: '爽肤水',
            imgUrl: '../../images/classify/1-3.jpg'
          },
          {
            id: 6,
            name: '护手霜',
            imgUrl: '../../images/classify/1-4.jpg'
          },
          {
            id: 6,
            name: '精华液',
            imgUrl: '../../images/classify/1-5.jpg'
          },
          {
            id: 6,
            name: '面膜',
            imgUrl: '../../images/classify/1-6.jpg'
          },
          {
            id: 6,
            name: '乳液',
            imgUrl: '../../images/classify/1-7.jpg'
          },
          {
            id: 6,
            name: '卸妆洁面',
            imgUrl: '../../images/classify/1-8.jpg'
          },
          {
            id: 6,
            name: '眼霜',
            imgUrl: '../../images/classify/1-9.jpg'
          },
          {
            id: 6,
            name: '精油',
            imgUrl: '../../images/classify/1-10.jpg'
          },
          {
            id: 6,
            name: '防晒',
            imgUrl: '../../images/classify/1-11.jpg'
          },
          {
            id: 6,
            name: '洗发水',
            imgUrl: '../../images/classify/1-12.jpg'
          },
          {
            id: 6,
            name: '护发素',
            imgUrl: '../../images/classify/1-13.jpg'
          },
          {
            id: 6,
            name: '护发精华',
            imgUrl: '../../images/classify/1-14.jpg'
          },
          {
            id: 6,
            name: '沐浴露',
            imgUrl: '../../images/classify/1-15.jpg'
          },
          {
            id: 6,
            name: '身体乳',
            imgUrl: '../../images/classify/1-16.jpg'
          },
          {
            id: 6,
            name: '男士护肤',
            imgUrl: '../../images/classify/1-17.jpg'
          },
          {
            id: 6,
            name: '牙膏',
            imgUrl: '../../images/classify/1-18.jpg'
          },
          {
            id: 6,
            name: '牙刷',
            imgUrl: '../../images/classify/1-19.jpg'
          },
          {
            id: 6,
            name: '漱口水',
            imgUrl: '../../images/classify/1-20.jpg'
          }
        ]
      },
      {
        id: 2,
        name: '美妆',
        isHaveChild: true,
        children: [
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
        name: '养生保健',
        isHaveChild: false,
        children: [
        ]
      },
      {
        id: 4,
        name: '配饰',
        isHaveChild: false,
        children: [
        ]
      },
      {
        id: 4,
        name: '女装',
        isHaveChild: false,
        children: [
        ]
      },
      {
        id: 4,
        name: '生活用品',
        isHaveChild: false,
        children: [
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