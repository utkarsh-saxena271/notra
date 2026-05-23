import jwt from 'jsonwebtoken';
import { config } from '../config/env.config.js';

type Payload = {
    id:string
}

export const genToken = (payload: Payload) => {
    const token = jwt.sign(payload, config.JWT_SECRET,{
        expiresIn:7*24*60*60,
    })
    return token;
}