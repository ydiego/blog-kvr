const Router = require("koa-router");
const Tag = require('../../controllers/tag')
const Article = require('../../controllers/article')

const router = new Router({
  prefix: "/admin"
});

router.get('/', async ctx => {
  await ctx.render('./admin/dist/index.html')
})

router.post("/tag/create", Tag.create);

router.get('/tag/list', Tag.list)

router.post('/tag/destroy', Tag.destroy)

router.post('/article/create', Article.create)

router.post('/article/update', Article.update)

router.post('/article/destroy', Article.destroy)

router.get('*', async ctx => {
  ctx.response.redirect('/admin')
})

module.exports = router;
