import dotenv from 'dotenv';
dotenv.config();

const env = {
    PORT: process.env.PORT || 3000,
    DB: {
        url: process.env.DB_URI,
        name: process.env.DB_NAME,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
    get(key: string, required: boolean = false) {
        const value = process.env[key];
        if (required && !value) {
            throw new Error(`Environment variable ${key} is required`);
        }
        return value;
    },
};

export default env;
