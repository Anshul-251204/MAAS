type ApiResponseType = {
  statusCode: number;
  data: Record<string, string | object>;
  success: boolean;
  message: string;
  code: string;
};

type FileType = {
  key: string;
  url: string;
};
