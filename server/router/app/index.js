const router = require('koa-router')()

router.get('/', async ctx => {
    ctx.body = 'home'
})

module.exports = router