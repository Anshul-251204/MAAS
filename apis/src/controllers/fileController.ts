import { Response, Request } from 'express';
import asyncHandler from '../utils/asyncHandler';
// import { requestSchemas } from '../validators';
// import productServices from '../services/productServices';
// import HTTP from '../config/http';
// import ApiResponse from '../utils/apiResponse';
import S3Services from '../services/awsServices';
import HTTP from '../config/http';
import ApiResponse from '../utils/apiResponse';

const upload = asyncHandler(async (req: Request, res: Response) => {
  const file = req.file;
  const result = await S3Services.uploadOnS3(file!);

  return res
    .status(HTTP.statusCode.OK)
    .json(
      new ApiResponse(
        HTTP.statusCode.OK,
        result?.data,
        'File uploaded successfully.',
        HTTP.code.SUCCESS,
        result?.success
      )
    );
});

const uploadMultiple = asyncHandler(async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const multipleResult = [];

  if (files && typeof files == 'object') {
    for (const file of files) {
      const result = await S3Services.uploadOnS3(file!);
      multipleResult.push(result.data);
    }
  }

  return res
    .status(HTTP.statusCode.OK)
    .json(
      new ApiResponse(
        HTTP.statusCode.OK,
        multipleResult,
        'Files uploaded successfully.',
        HTTP.code.SUCCESS
      )
    );
});

const deleteFile = asyncHandler(async (req: Request, res: Response) => {
  const { key } = req.params;

  const result = await S3Services.removeFromS3(key);

  res
    .status(200)
    .json(
      new ApiResponse(
        HTTP.statusCode.OK,
        null,
        'File removed successfully.',
        HTTP.code.SUCCESS,
        result?.success
      )
    );
});

export const FileControllers = {
  upload,
  deleteFile,
  uploadMultiple,
};
