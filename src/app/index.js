import express from 'express';
import expressRouterOptions from "../config/expressRouterOptions";
import processRouter from '../config/processRouter';

import userRouters from './Users'
//User router
let userRouter = express.Router(expressRouterOptions);
if (userRouters && userRouters.length > 0) {
    userRouter = processRouter(userRouter, userRouters);
} else {
    console.error('There is no user route configured')
}
export {
    userRouter,
}