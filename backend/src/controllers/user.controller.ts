import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.util.js";
import { deleteUserService, getProfileService, updateProfileService } from "../services/user.service.js";
import ApiResponse from "../utils/apiResponse.util.js";


export const getProfileController = asyncHandler(async(req:Request, res:Response) => {
    const id = req.user.id;
    const data = await getProfileService(id);
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

export const updateProfileController = asyncHandler(async(req:Request, res:Response)=>{
    const id = Number(req.user.id);
    const data = await updateProfileService(req.body, id);
    res.status(200).json(
        new ApiResponse(200,data,
        "Profile Updated Successfully"
    )
    )
})

export const deleteUserController = asyncHandler(async(req:Request, res:Response) => {
    const id = Number(req.user.id);
    const data = await deleteUserService(id);
    res.status(200).json(
        new ApiResponse(200,data,
        "Profile Deleted Successfully"
    )
    )
})