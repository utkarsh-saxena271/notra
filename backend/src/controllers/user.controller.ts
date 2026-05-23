import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.util.js";
import { getProfileService } from "../services/user.service.js";
import APIError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";


export const getProfileController = asyncHandler(async(req:Request, res:Response) => {
    const id = req.user.id;
    const data = await getProfileService(id);
    if(!data){
        throw new APIError(404,"User Not Found");
    }
    res.status(200).json(
        new ApiResponse(200,{
            id: data.id,
            name: data.name,
            email: data.email
        },
        "User Profile Successfully fetched"
    )
    )
})