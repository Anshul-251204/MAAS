import axiosInstance from "./axios";
import ENDPOINT from "./endPoint.c";

export const storeService = {
  storeInit: <T>(storeDetails: T) =>
    axiosInstance.post(ENDPOINT.store.init, storeDetails),
  addThemeConfig: (themeconfig: any) =>
    axiosInstance.post(ENDPOINT.store.addTheme, themeconfig),
};
