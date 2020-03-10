const Router = require("koa-router");
const Tag = require('../../controllers/tag')
const Article = require('../../controllers/article')

const router = new Router({
  prefix: "/api"
});

router.post("/tag/create", Tag.create);

router.get('/tag/list', Tag.list)

router.post('/tag/destroy', Tag.destroy)

router.post('/article/list', Article.list)

router.post('/article/create', Article.create)

router.post('/article/update', Article.update)

router.post('/article/destroy', Article.destroy)

router.get('/article/list', Article.list)

router.get('/article/detail', Article.detail)

module.exports = router