const Router = require("koa-router");

const router = new Router({
  prefix: "/api/admin"
});

router.get("/register", async ctx => {
  ctx.response.status = 200;
  ctx.body = "register";
});

module.exports = router;
