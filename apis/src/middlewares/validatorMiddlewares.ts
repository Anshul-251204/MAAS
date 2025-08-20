import HTTP from "../config/http";
import ApiResponse from "../utils/apiResponse";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (schema: any) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      const err: Record<string, string> = {};

      for (const e of error.issues) {
        const key = String(e.path[0] ?? "unknown");
        err[key] = e.message;
      }
      return res
        .status(HTTP.statusCode.BAD_REQUEST)
        .json(
          new ApiResponse(
            HTTP.statusCode.BAD_REQUEST,
            err,
            "Validation failed",
            HTTP.code.BAD_REQUEST,
            false
          )
        );

      return res
        .status(HTTP.statusCode.INTERNAL_SERVER_ERROR)
        .json(
          new ApiResponse(
            HTTP.statusCode.BAD_REQUEST,
            null,
            "Internal server error",
            HTTP.code.SERVER_ERROR
          )
        );
    }
  };
};
