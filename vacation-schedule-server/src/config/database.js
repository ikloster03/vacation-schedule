const mongoose = require('mongoose');
const config = require('./index.js');

const mongoAuthUser = config().MONGO_AUTH_USER;
const mongoAuthPass = config().MONGO_AUTH_PASS;
const isGitlabMongo = mongoAuthUser !== 'null' && mongoAuthPass !== 'null';
const auth = isGitlabMongo
  ? {
      user: mongoAuthUser,
      password: mongoAuthPass,
    }
  : undefined;
const authSource = isGitlabMongo ? 'admin' : undefined;

let connections = null;

const getConnection = () => {
  if (connections) return Promise.resolve(connections);
  return createConnections();
};

const createConnections = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  if (auth) {
    options.auth = auth;
  }

  if (authSource) {
    options.authSource = authSource;
  }

  const vacationScheduleConnection = await mongoose
    .createConnection(config().MONGODB_URI, options)
    .catch(err => {
      console.error(err);
      process.exit(-1);
    });
  // const UserModel = vacationScheduleConnection.model('User', UserSchema);
  // const EventModel = vacationScheduleConnection.model('Event', EventSchema);

  connections = {
    // UserModel,
    // EventModel,
    connections: {
      vacationScheduleConnection,
    },
  };

  return connections;
};

module.exports = {
  createConnections,
  getConnection,
};
