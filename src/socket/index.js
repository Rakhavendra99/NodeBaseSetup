#!/usr/bin/env node

/**
 * Module dependencies.
 */
import App from './main';

import protocol from 'http';
import { socketConnection } from './socket';
import config from '../config';
const { socketPort: port } = config;
App.set('port', port);

/**
 * Create HTTP server.
 */
const SocketServer = protocol.createServer(App);

/**
 * Listen on provided port, on all network interfaces.
 */
SocketServer.on('error', onError);
SocketServer.on('listening', onListening);

socketConnection(SocketServer, '/socket.io');
SocketServer.listen(port);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = SocketServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}



