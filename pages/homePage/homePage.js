// pages/homePage/homePage.js
const ajax = require('../../utils/ajax.js')
//const utils
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbars:['推荐','护肤','家居','食品','电子数码'],
    currentTab:0,
    indicatorDots:true,
    autoplay:true,
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    banners:[
      {
        imgUrl:"http://img1.juimg.com/170417/330755-1F41G6250158.jpg",
        id:1
      },
      {
        imgUrl: "http://file.youboy.com/a/141/63/14/8/246788.jpg",
        id: 2
      },
      {
        imgUrl: "http://img.redocn.com/sheji/20141209/huazhuangpinhaibao_3666393.jpg",
        id: 3
      }
    ],
    menus:[
      {
        id:1,
        menuName:'箱包',
        imgUrl:'../../images/category/cat1.png'
      },
      {
        id: 2,
        menuName: '化妆品',
        imgUrl: '../../images/category/cat2.png'
      },
      {
        id: 3,
        menuName: '内衣',
        imgUrl: '../../images/category/cat3.png'
      },
      {
        id: 4,
        menuName: '食品',
        imgUrl: '../../images/category/cat4.png'
      },
      {
        id: 5,
        menuName: '自营',
        imgUrl: '../../images/category/cat5.png'
      },
      {
        id: 6,
        menuName: '全球购',
        imgUrl: '../../images/category/cat6.png'
      }
    ],
    brands:[
      {
        id:1,
        name:'雅诗兰黛',
        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583843971140&di=33ee15953a97634728736b8f5faea3e8&imgtype=0&src=http%3A%2F%2Fwww.believetuner.com%2Fuploadfile%2Fimage%2F20160621%2F20160621100841544154.jpg',
        remart:'成就钻石美肌'
      },
      {
        id: 1,
        name: '迪奥',
        imgUrl: 'http://olbpic.ol-img.com/album/201402/04/225205p11qp1qhhdp1x29g.jpg',
        remart: '独一无二彩虹'
      },
      {
        id: 1,
        name: 'Mac',
        imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1381096647,3273379804&fm=26&gp=0.jpg',
        remart: '口红'
      }
    ],
    newGoods:[
      {
        id:1,
        name:'SK-II',
        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583852969623&di=35e4d3f7ee9d93216599d6b76e09fac9&imgtype=0&src=http%3A%2F%2Ffile.youboy.com%2Fa%2F141%2F63%2F14%2F8%2F246788.jpg',
        price:99,
        privilegePrice:89,
        discount:8
      },
      {
        id: 2,
        name: 'SK-II',
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1194097673,290920682&fm=26&gp=0.jpg',
        price: 99,
        privilegePrice: 89,
        discount: 8
      },
      {
        id: 3,
        name: 'BERED',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583853050731&di=628f95d7146468674406a88713dc3fe1&imgtype=0&src=http%3A%2F%2Fpic9.nipic.com%2F20100822%2F5579261_211656817352_2.jpg',
        price: 99,
        privilegePrice: 89,
        discount: 8
      },
      {
        id: 4,
        name: 'CHANEL',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583853102612&di=0d2987f39a4286661c033ae0f0363edd&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181206%2Fee94b3bef2ef4e438b8c166344c4e93e.jpeg',
        price: 99,
        privilegePrice: 89,
        discount: 8
      }
    ]
  },
  navbarTap: function(e){
    this.setData({
      currentTab:e.currentTarget.dataset.idx
    })
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