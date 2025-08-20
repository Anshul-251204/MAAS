// src/constants/HttpStatus.ts
const HTTP = {
    statusCode: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,

        MOVED_PERMANENTLY: 301,
        FOUND: 302,

        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        UNPROCESSABLE_ENTITY: 422,

        INTERNAL_SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        custom: (statusCode: number) => statusCode,
    },
    code: {
        SUCCESS: 'SUCCESS',
        CREATED: 'CREATED',
        BAD_REQUEST: 'BAD_REQUEST',
        UNAUTHORIZED: 'UNAUTHORIZED',
        FORBIDDEN: 'FORBIDDEN',
        NOT_FOUND: 'NOT_FOUND',
        CONFLICT: 'CONFLICT',
        VALIDATION_ERROR: 'VALIDATION_ERROR',
        SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
        SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
    },
    custom: (code: string) => {
        return code;
    },
};

export default HTTP;