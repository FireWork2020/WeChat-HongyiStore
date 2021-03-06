// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../images/person/personal_pay.png',
      },
      {
        typeId: 1,
        name: '待收货',
        url: 'bill',
        imageurl: '../../images/person/personal_receipt.png',
      },
      {
        typeId: 2,
        name: '待评价',
        url: 'bill',
        imageurl: '../../images/person/personal_comment.png'
      },
      {
        typeId: 3,
        name: '退换/售后',
        url: 'bill',
        imageurl: '../../images/person/personal_service.png'
      }
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo.nickName) {
      console.log(1);
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      console.log(2);
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log(3);
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e);
    wx.getUserInfo({
      success: function(res){
        var userInfo = res.detail.userInfo;
        this.userInfo = userInfo;
        // wx.login({
        //   success: function(loginRes){
        //     var code = loginRes.code;
        //     console.log(code);
        //     wx.request({
        //       url: 'http://localhost:8080/user/consumerVerify',
        //       method:'POST',
        //       data:{
        //         nickName: userInfo.nickName,
        //         code: code,
        //         country: userInfo.country,
        //         province: userInfo.province,
        //         city: userInfo.city,
        //         language: userInfo.language,
        //         gender: userInfo.gender,
        //         avatarUrl:userInfo.avatarUrl
        //       },
        //       success: function(requestRes){
        //         app.globalData.userInfo = res.detail.userInfo;
        //       }
        //     })
        //   }
        // })
      }
    });
    

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  myAddress: function (e) {
    wx.navigateTo({ url: '../addressList/addressList' });
  }
})
