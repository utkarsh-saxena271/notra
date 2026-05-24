import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
import asyncHandler from "../utils/asyncHandler.util.js";
import APIError from "../utils/apiError.util.js";
import { config } from "../config/env.config.js";
import { db } from "../db/db.js";
import { users } from "../db/schema/user.schema.js";
import { eq } from "drizzle-orm";

declare global{
  namespace Express{
    interface Request{
      user:{
        id:string
      }
    }
  }
}


const authMiddleware = asyncHandler(async(req : Request, res: Response, next:NextFunction) => {
    const token = req.cookies.token;
    if(!token){
        throw new APIError(401, "Unauthorized")
    }
    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;
    const user = await db.select().from(users).where(eq(users.id, decoded.id));
   if (user.length === 0) {

      throw new APIError(401, "User not found");

    }

    req.user = {
      id: user[0]?.id.toString() as unknown as string,
    };

    next();
})

export default authMiddleware