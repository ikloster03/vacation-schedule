const Router = require('koa-router');
// const userRoute = require('./user')(Router);
// const eventRoute = require('./event')(Router);

function bootstrapRoutes(app) {
  const router = new Router({
    prefix: `/api/v1`,
  });

  // router.use(userRoute.routes());
  // router.use(eventRoute.routes());

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = bootstrapRoutes;
