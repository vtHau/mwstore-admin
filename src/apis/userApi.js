import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const userApi = {
  getAllUser: () => {
    return axiosClient.get(PATH_URL.ALL_USER);
  },
};

export default userApi;
