import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/apiError';
import HTTP from '../config/http';
export const errorHandler = async (
  err: ApiError,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  console.log('error', err);
  res.status(err?.statusCode || HTTP.statusCode.INTERNAL_SERVER_ERROR).json({
    success: err.success || false,
    message: err.message,
    statusCode: err?.statusCode || HTTP.statusCode.INTERNAL_SERVER_ERROR,
    error: {
      code: err.code || 500,
      detail: err.details || 'something went wrong',
    },
  });
};
