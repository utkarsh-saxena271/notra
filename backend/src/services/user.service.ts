import { eq } from "drizzle-orm"
import { db } from "../db/db.js"
import { users } from "../db/schema/user.schema.js"
import APIError from "../utils/apiError.util.js";


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