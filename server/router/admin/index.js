const Router = require("koa-router");

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
