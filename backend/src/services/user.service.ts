import { eq } from "drizzle-orm"
import { db } from "../db/db.js"
import { users } from "../db/schema/user.schema.js"
import APIError from "../utils/apiError.util.js";

type Update = {
    name?: string;
    email?: string;
};


export const getProfileService = async(data : string ) => {
    const id = Number(data);
    const user = await db.select().from(users).where(eq(users.id, id));
    if(user.length === 0){
        throw new APIError(404, "User not found");
    }
    const prof = {
        id : user[0]?.id,
        email:user[0]?.email,
        name:user[0]?.name
    }
    return prof;
}

export const updateProfileService = async(data : Update, id : number) => {
    const user = await db.update(users).set(data).where(eq(users.id,id)).returning();   
    if(user.length === 0){
        throw new APIError(400, "Could not Update, try again!")
    }
    return {
        id:user[0]?.id,
        name:user[0]?.name,
        email:user[0]?.email
    }
}

export const deleteUserService = async(id:number) => {
    const user = await db.delete(users).where(eq(users.id,id)).returning();
    if(user.length === 0){
        throw new APIError(400, "Could not Delete, try again!")
    }
    return {
        id:user[0]?.id,
        name:user[0]?.name,
        email:user[0]?.email
    }
}