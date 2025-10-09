import axiosInstance from "./axios";
import ENDPOINT from "./endPoint.c";

export const fileService = {
  upload: (fileFormData: FormData) =>
    axiosInstance.post(ENDPOINT.file.upload, fileFormData),
  remove: (key: string) => axiosInstance.delete(`/api/file/${key}`),
};
