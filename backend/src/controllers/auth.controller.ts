import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.util.js";
import { loginService, registerService } from "../services/auth.service.js";
import ApiResponse from "../utils/apiResponse.util.js";


export const registerController = asyncHandler(async (req: Request, res: Response) => {
    const user = await registerService(req.body);
    res.status(200).json(
        new ApiResponse(200,
            {
                id: user?.id,
                name: user?.name,
                email: user?.email
            },
            "User registered Successfully"
        )
    )
})

export const loginController = asyncHandler(async (req: Request, res: Response) => {
    const data = await loginService(req.body);
    res.cookie('token', data.token)
    res.status(200).json(
        new ApiResponse(200,
            {
                id: data.user?.id,
                name: data.user?.name,
                email: data.user?.email

            },
            "User logged in Successfully"
        )
    )
})

export const logoutController = asyncHandler(
  async (req: Request, res: Response) => {

    res.clearCookie("token");

    res.status(200).json(
      new ApiResponse(
        200,
        {},
        "User logged out successfully"
      )
    );
  }
);