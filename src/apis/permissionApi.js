import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const permissionApi = {
  getAllPermission: () => {
    return axiosClient.get(PATH_URL.ALL_PERMISSION);
  },
};

export default permissionApi;
