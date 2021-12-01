import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const userApi = {
  getAllUser: () => {
    return axiosClient.get(PATH_URL.ALL_USER);
  },
  deleteUser: (user) => {
    return axiosClient.post(PATH_URL.DELETE_USER, user);
  },
};

export default userApi;
