const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const path = require('path')
const fs = require('fs')
const app = new Koa()
const router = new Router()

// 资源文件
app.use(statics(path.resolve(__dirname, '../dist')))

router.get('/', async (ctx, next) => {

  
})

// 开启路由
app.use(router.routes()).use(router.allowedMethods())

// 应用监听端口
app.listen(3002, () => {
  console.log('start： http://localhost:3002')
})
