const router = require('koa-router')()

router.get('*', async ctx => {
  ctx.response.redirect('/')
})

router.get('/',async ctx => {
  ctx.render('/public/index.html')
})


module.exports = router
