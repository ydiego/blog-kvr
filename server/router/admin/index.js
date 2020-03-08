const Router = require("koa-router");
const Tag = require('../../controllers/tag')
const Article = require('../../controllers/article')

const router = new Router({
  prefix: "/admin"
});

router.get('/', async ctx => {
  await ctx.render('./admin/dist/index.html')
})

router.get('*', async ctx => {
  ctx.response.redirect('/admin')
})

module.exports = router;
