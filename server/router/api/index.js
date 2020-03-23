const Router = require("koa-router");
const Tag = require("../../controllers/tag");
const User = require("../../controllers/user");
const Article = require("../../controllers/article");
const Auth = require('../../middleware/auth')
const Upload = require('./upload')

const router = new Router({
  prefix: "/api"
});

router.post('/register', User.register)

router.post('/login', User.login)

router.post('/logout', User.logout)

router.post('/uploadfile', Upload.uploadfile)

router.post('/uploadfiles', Upload.uploadfiles)

router.post("/tag/create", Auth, Tag.create);

router.get("/tag/listAll", Tag.listAll);

router.get("/tag/list", Tag.list);

router.post("/tag/destroy", Auth, Tag.destroy);

router.post("/article/create", Auth, Article.create);

router.post("/article/update", Auth, Article.update);

router.post("/article/destroy", Auth, Article.destroy);

router.get("/article/list", Article.list);

router.get("/article/detail", Article.detail);

module.exports = router;
