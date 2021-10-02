const dotenv = require('dotenv');
const getenv = require('getenv');
dotenv.config();

const defaults = {
  NODE_ENV: 'development',
  PORT: 3001,
  MONGODB_URI: 'mongodb://localhost:27017/vacation-schedule',
  MONGO_AUTH_USER: null,
  MONGO_AUTH_PASS: null,
};

const config = () => ({
  NODE_ENV: getenv('NODE_ENV', defaults.NODE_ENV),
  PORT: getenv('PORT', defaults.PORT),
  MONGODB_URI: getenv('MONGODB_URI', defaults.MONGODB_URI),
  MONGO_AUTH_USER: getenv('MONGO_AUTH_USER', defaults.MONGO_AUTH_USER),
  MONGO_AUTH_PASS: getenv('MONGO_AUTH_PASS', defaults.MONGO_AUTH_PASS),
});

module.exports.isDevelopment = config().NODE_ENV === 'development';
module.exports.isProduction = config().NODE_ENV === 'production';

module.exports = config;
