import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const createToken = (details) => {
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + parseInt(process.env.TOKEN_EXPIRY_TIME));
    details.exp = expiryTime;
    const token = jwt.sign({ details }, process.env.TOKEN_SECRET);
    return token;
};

export const decodeToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET);
};