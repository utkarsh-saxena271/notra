import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { users } from "../db/schema/user.schema.js";
import APIError from "../utils/apiError.util.js";
import bcrypt from 'bcrypt'
import { genToken } from "../utils/tokenGenerator.js";

interface Register {
    name : string,
    email : string,
    password:string
}

interface Login {
    email:string,
    password : string
}

export const registerService = async(data : Register) => {
    const {name, email, password } = data;
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if(existingUser.length > 0){
        throw new APIError(400, "User already exists");
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const user = await db.insert(users).values({
        name : name,
        email : email,
        password : hashedpass
    }).returning()
    return user[0];
}

export const loginService = async(data:Login) => {
    const {email, password} = data;
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if(existingUser.length === 0){
        throw new APIError(404, "User doesn't exist");
    }
    const pass = await bcrypt.compare(password,existingUser[0]?.password as unknown as string);
    if(!pass){
        throw new APIError(400, "Invalid Credentials");
    }
    const token = genToken({id:existingUser[0]?.id.toString() as unknown as string})
    return {
        user : existingUser[0],
        token
    }
}
