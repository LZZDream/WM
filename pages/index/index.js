// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World2',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  dlt() {
    var result
    wx.request({
      url: "http://lizhuozhao.com/dlt",
      success: function (res) {
        result = res.data
        wx.showModal({
          title: res.data.name,
          content: res.data.message,
          success: function (res) {
            if (res.confirm) { //这里是点击了确定以后
              console.log('用户点击确定')
              wx.setClipboardData({
                data: result.name+":"+result.message,//要复制的数据
                success (res) {
                  wx.getClipboardData({
                    success (res) {
                      console.log(res.data) // data
                    }
                  })
                }
              })
            } else { //这里是点击了取消以后
              console.log('用户点击取消')
            }
          }
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  ssq() {
    var result
    wx.request({
      url: "http://lizhuozhao.com/ssq",
      success: function (res) {
        result = res.data
        wx.showModal({
          title: res.data.name,
          content: res.data.message,
          success: function (res) {
            if (res.confirm) { //这里是点击了确定以后
              console.log('用户点击确定')
              wx.setClipboardData({
                data: result.name+":"+result.message,//要复制的数据
                success (res) {
                  wx.getClipboardData({
                    success (res) {
                      console.log(res.data) // data
                    }
                  })
                }
              })
            } else { //这里是点击了取消以后
              console.log('用户点击取消')
            }
          }
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})