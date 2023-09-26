
import http from 'http';
import config from './config';
import App from './mainRouters'

const HttpServer = http.createServer(App);

const { port } = config
App.set(port)

HttpServer.listen(port);
HttpServer.on('listening', onListening);

function onListening() {
    var addr = HttpServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.info('Listening on ' + bind);
}

