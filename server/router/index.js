const router = require('koa-router')()

router
.get('/', async (ctx, next) => {
    ctx.body = 'hello world!~'
})

router.get('*', async ctx => {
  ctx.body = '404'
})

const adminRouter = require('./admin')
const appRouter = require('./app')
const initRouter = function(app) {
    [adminRouter, appRouter, router].forEach(route => {
        app.use(route.routes()).use(route.allowedMethods())
    })
}



module.exports = initRouter