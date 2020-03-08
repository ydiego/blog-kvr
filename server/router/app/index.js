const router = require('koa-router')({
  prefix: "/api"
})
const Article = require('../../controllers/article')

router.get('/article/list', Article.list)

router.get('/article/detail', Article.detail)

router.get('*', async ctx => {
  ctx.body = '404'
})


module.exports = router