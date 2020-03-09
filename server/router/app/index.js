const router = require('koa-router')()

router.get('*', async ctx => {
  ctx.response.redirect('/')
})

router.get('/',async ctx => {
  ctx.render('/app/build/index.html')
})


module.exports = router
