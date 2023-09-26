import express from 'express';
import cors from 'cors';
import {
    userRouter,
} from './app';

const App = express();

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use('/api/user', userRouter)

export default App;