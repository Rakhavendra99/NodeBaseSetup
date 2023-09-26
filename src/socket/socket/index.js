'use strict';
import socketIO from 'socket.io';
export const socketConnection = (server, path) => {
    const io = socketIO(server, { path: path, serveClient: false });
    global.IO = io;
    io.on('connection', function (socket) {
        socket.emit('Connection Success');
    });
}

export const emitter = (url, response) => {
    console.info('URL : ' + url);
    if (global.IO) {
        try {
            global.IO.emit(url, response);
        } catch (err) {
            console.error('Error : ' + err);
        }
    }
}

