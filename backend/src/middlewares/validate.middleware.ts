import type { AnyZodObject } from "zod/v3";
import type { Request, Response, NextFunction } from "express";
import APIError from "../utils/apiError.util.js";


const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      throw new APIError(400, error.errors?.[0]?.message || "Validation failed");
    }
  };

export default validate;