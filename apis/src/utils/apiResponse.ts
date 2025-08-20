class ApiResponse {
    data: any;
    message: string;
    success: boolean;
    statusCode: number;
    code?: string;
    constructor(statusCode: number, data: any, message: string, code: string = '', success: boolean = true) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;
        this.code = code;
        this.success = success;
    }
}

export default ApiResponse;
