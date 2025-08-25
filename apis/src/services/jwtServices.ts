import ApiError from '../utils/apiError';
import env from '../config/env';
import * as jwt from 'jsonwebtoken';
import HTTP from '../config/http';

const JWT_SECRET = env.JWT.secret || 'randomJwtSecert';
const JWT_EXPIRES_IN = env.JWT.expiresIn || '1h'; // Token expiry (e.g. 1h, 7d)

class JwtService {
  async sign(payload: object, expiresIn?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: expiresIn || JWT_EXPIRES_IN } as jwt.SignOptions,
        (err, token) => {
          if (err || !token) {
            reject(err);
          } else {
            resolve(token);
          }
        }
      );
    });
  }

  verify<T = any>(token: string): T | undefined {
    try {
      return jwt.verify(token, JWT_SECRET) as T;
    } catch (error: any) {
      if (error?.name == 'TokenExpiredError') {
        throw new ApiError(
          'Accesstoken is expired',
          HTTP.statusCode.FORBIDDEN,
          HTTP.code.FORBIDDEN,
          'jwt token is expired please login again'
        );
      }

      throw new ApiError(
        'Invalid accesstoken',
        HTTP.statusCode.FORBIDDEN,
        HTTP.code.FORBIDDEN,
        'Invilad JWT token'
      );
    }
  }

  decode<T = any>(token: string): T | null {
    return jwt.decode(token) as T | null;
  }
}

export default new JwtService();
