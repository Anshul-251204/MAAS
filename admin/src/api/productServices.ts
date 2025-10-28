import axiosInstance from "./axios";
import ENDPOINT from "./endPoint.c";

export const productService = {
  create: <T>(productDetails: T) =>
    axiosInstance.post(ENDPOINT.product.create, productDetails),
  get: (otherQury: string) =>
    axiosInstance.get(ENDPOINT.product.get + otherQury),
};
