class ApiError extends Error {
  public message: string;
  public statusCode: number;
  public success: boolean;
  public code?:string;
  public details?:string

  constructor( message: string, statusCode: number, code: string, details: string = "",success: boolean = false,) {
      super(message);
      this.message = message;
      this.statusCode = statusCode;
      this.code = code;
      this.success = success;
      this.details = details;
      this.stack = process.env.NODE_ENV === 'development' ? this.stack : '';
  }
}

export default ApiError;
