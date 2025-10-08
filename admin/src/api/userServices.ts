import axiosInstance from "./axios";
import ENDPOINT from "./endPoint.c";

export const userService = {
  signUp: <T>(userDetails: T) =>
    axiosInstance.post(ENDPOINT.auth.signUp, userDetails),
};

// getUsers: () => axiosInstance.get(ENDPOINT.auth.signUp),
// getUserById: (id: string) => axiosInstance.get(`/users/${id}`),
// createUser: (data: any) => axiosInstance.post("/users", data),
// updateUser: (id: string, data: any) =>
//   axiosInstance.put(`/users/${id}`, data),
// deleteUser: (id: string) => axiosInstance.delete(`/users/${id}`),
