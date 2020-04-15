//index.js
const app = getApp()

Page({
  onLoad:function (options)
  {
     wx.request({
       url: 'http://127.0.0.1:3000/',
       success:res =>
       {
         console.log('get success info:')
         console.log(res.data)
         this.setData(res.data)
       },
       fail:res=>
       {
         console.log('get fail')
       }
     })
  },
  submit:function(e)
  {
      wx.request({
        method:'post',
        url: 'http://127.0.0.1:3000/',
        data: e.detail.value,
        success:res=>
        {
          console.log('get success info:')
          console.log(res)
        },
        fail:res=>
        {
          console.log('get fail')
        }

      })
  }
})
