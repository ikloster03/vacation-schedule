const Koa = require('koa');
const koaBody = require('koa-body');
const compress = require('koa-compress');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const logger = require('koa-logger')();

const errorHandler = require('./middleware/error.middleware');
const bootstrapRoutes = require('./components');
const { isDevelopment, isProduction } = require('./config/index.js');

const app = new Koa();

/**
 * Add here only development middlewares
 */
if (isDevelopment) {
    app.use(logger);
}

/**
 * Pass to our app instance middlewares
 */
app.use(errorHandler);
app.use(helmet({ contentSecurityPolicy: isProduction ? undefined : false }));
app.use(compress());
app.use(cors());
app.use(koaBody());

/**
 * Apply to our app the api router
 */
bootstrapRoutes(app);

module.exports = app;
