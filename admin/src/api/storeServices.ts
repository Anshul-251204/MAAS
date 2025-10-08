import axiosInstance from "./axios";
import ENDPOINT from "./endPoint.c";

export const storeService = {
  storeInit: <T>(storeDetails: T) =>
    axiosInstance.post(ENDPOINT.store.init, storeDetails),
};
