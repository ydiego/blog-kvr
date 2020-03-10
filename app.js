const Koa = require("koa"),
  path = require("path"),
  initRouter = require("./server/router"),
  bodyParser = require("koa-bodyparser"),
  static = require("koa-static"),
  cors = require("@koa/cors"),
  template = require('koa-art-template'),
  session = require("koa-session");

const app = new Koa();

const SESSION_CONFIG = {
  key: "koa:blog_session" /** (string) cookie key (default is koa:sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true /** (boolean) automatically commit headers (default true) */,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

template(app, {
  'root': __dirname,
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

app.use(session(SESSION_CONFIG, app));
// app.use(static(__dirname + "/public"));
app.use(static(__dirname + "/app/build"));
// admin 静态资源地址
app.use(static(__dirname + "/admin/dist"));

app.use(cors());
app.use(bodyParser());

initRouter(app);

app.listen(4000);
