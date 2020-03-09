const adminRouter = require("./admin");
const appRouter = require("./app");
const apiRouter = require("./api");
const initRouter = function(app) {
  // 路由顺序
  [adminRouter, apiRouter, appRouter, ].forEach(route => {
    app.use(route.routes()).use(route.allowedMethods());
  });
};

module.exports = initRouter;
