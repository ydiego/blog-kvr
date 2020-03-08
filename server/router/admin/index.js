const Router = require("koa-router");
const Tag = require('../../controllers/tag')
const Article = require('../../controllers/article')

const router = new Router({
  prefix: "/api/admin"
});

router.post("/tag/create", Tag.create);

router.get('/tag/list', Tag.list)

router.post('/article/create', Article.create)

router.post('/article/update', Article.update)

router.post('/article/destroy', Article.destroy)

router.get('*', async ctx => {
  ctx.body = '404'
})

module.exports = router;
