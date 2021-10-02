const http = require('http');
const app = require('./app');
const { createConnections } = require('./config/database');
const config = require('./config/index.js');

async function bootstrap() {
    await createConnections();
    return http.createServer(app.callback()).listen(config().PORT);
}

(async () => {
    const server = await bootstrap().catch(err => {
        setImmediate(() => {
            console.error('Unable to run the server because of the following error:');
            console.error(err);
            process.exit(1);
        });
    });
    console.log(`🚀 Server listening on port ${server.address().port}!`);
})();
