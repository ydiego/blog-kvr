const adminRouter = require('./admin')
const appRouter = require('./app')
const initRouter = function(app) {
    [adminRouter, appRouter].forEach(route => {
        app.use(route.routes()).use(route.allowedMethods())
    })
}

// router
// .get('/', async (ctx, next) => {
//     ctx.body = 'hello world!~'
// })

module.exports = initRouter