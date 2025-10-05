import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import fs from 'fs';
import env from '../config/env';

type UploadOnS3ReturnType = {
  success: boolean;
  data: { url: string; key: string } | null;
};

class S3Services {
  private S3: S3Client;
  constructor() {
    this.S3 = new S3Client({
      region: env.get('AWS_REGION')!,
      credentials: {
        accessKeyId: env.get('AWS_ACCESS_KEY_ID')!,
        secretAccessKey: env.get('AWS_SECRET_ACCESS_KEY')!,
      },
    });
  }

  async uploadOnS3(file: Express.Multer.File): Promise<UploadOnS3ReturnType> {
    try {
      const fileStream = fs.createReadStream(file.path);
      const key = Date.now() + '-' + file.originalname;

      const command = new PutObjectCommand({
        Bucket: env.get('AWS_BUCKET_NAME'),
        Key: key,
        Body: fileStream,
      });

      await this.S3.send(command);

      fs.unlinkSync(file.path);

      return {
        success: true,
        data: {
          key,
          url: `https://${env.get('AWS_BUCKET_NAME')}.s3.${env.get('AWS_REGION')}.amazonaws.com/${key}`,
        },
      };
    } catch (error) {
      fs.unlinkSync(file.path);
      console.error(error);
      return { success: false, data: null   };
    }
  }

  async removeFromS3(fileKey: string) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: env.get('AWS_BUCKET_NAME'),
        Key: fileKey,
      });
      await this.S3.send(command);
      return { success: true };
    } catch (error) {
      console.error('S3 Delete Error:', error);
      return { success: false };
    }
  }
}

export default new S3Services();
