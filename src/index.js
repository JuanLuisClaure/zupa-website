import "babel-polyfill"
import { paths }  from './config.paths'

const init      = require('./server/conect')
const https     = require('http')

const path      = require('path')
const Koa       = require('koa')
const Router    = require('koa-router')
const serve     = require('koa-static')
const pug       = require('pug')

const app       = new Koa()
const api       = new Router()



const server    = https.createServer(app.callback())
const io        = require('socket.io')(server)





app.use(serve(path.join(__dirname + '/')))
app.use(api.routes())
app.use(api.allowedMethods())
app.use((ctx, next) => {
  (ctx.status === 404)? ctx.body = pug.renderFile(__dirname + '/server/2V/nofound.pug') : next()
})


api.get('/', (ctx, next) => {
    init.setup(io)
    ctx.body = pug.renderFile(__dirname + '/server/2V/inicio.pug')
})


server.listen(paths.port)
