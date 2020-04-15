const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
// 处理POST请求
app.post('/', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})
//测试数据
var data = {
  sno: '07180799',
  name: '张三',
  gender: 0,
  skills: [
    { name: 'HTML', value: 'html', checked: true },
    { name: 'CSS', value: 'css', checked: true },
    { name: 'JavaScript', value: 'js', checked: false },
    { name: 'Photoshop', value: 'ps', checked: false },
  ],
  opinion: '测试'
}
// 处理GET请求
app.get('/', (req, res) => {
  res.json(data)
})
// 监听3000端口
app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
