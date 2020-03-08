const adminRouter = require("./admin");
const appRouter = require("./app");
const apiRouter = require("./api");
const initRouter = function(app) {
  [adminRouter, appRouter, apiRouter].forEach(route => {
    app.use(route.routes()).use(route.allowedMethods());
  });
};

module.exports = initRouter;
