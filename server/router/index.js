const adminRouter = require("./admin");
const appRouter = require("./app");
const apiRouter = require("./api");
const graphqlRouter = require("./graphql");

const initRouter = function(app) {
  // 路由顺序
  [graphqlRouter, adminRouter, apiRouter, appRouter, ].forEach(route => {
    app.use(route.routes()).use(route.allowedMethods());
  });
};

module.exports = initRouter;
