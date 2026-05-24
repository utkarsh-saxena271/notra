import type { Request, Response, NextFunction } from "express";
import APIError from "../utils/apiError.util.js";
import type { ZodObject } from "zod";


const validate =
  (schema: ZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      throw new APIError(400, error.errors?.[0]?.message || "Validation failed");
    }
  };

export default validate;