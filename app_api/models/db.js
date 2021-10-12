const mongoose = require('mongoose');
const readLine = require('readline');

let dbURL = 'mongodb://localhost:27017/sportsmart';

//FIXME - turn off in the future
mongoose.set('debug', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL), 1000);
}

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

connect();

require('./Seller');
