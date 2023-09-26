'use strict';

import express from 'express';
import cors from 'cors';
import { emitter } from './socket';

//Routes configuration
// import { EmitterRouter } from './routes';

const App = express();

// parse application/json
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.post('/api/socket', (req, resp) => {
    const {url, response} = req.body;
    console.log(" ")
    console.log("------------------------------------->");
    console.log("request :",req.body);
    emitter(url, response)
    resp.status(200);
    resp.send({ success: true, response: {} })
});

export default App;
