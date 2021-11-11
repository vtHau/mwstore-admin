import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const roleApi = {
  getAllRole: () => {
    return axiosClient.get(PATH_URL.ALL_ROLE);
  },
  getRole: (role) => {
    return axiosClient.post(PATH_URL.GET_ROLE, role);
  },
  updateRole: (role) => {
    return axiosClient.post(PATH_URL.UPDATE_ROLE, role);
  },
  newRole: (role) => {
    return axiosClient.post(PATH_URL.NEW_ROLE, role);
  },
  deleteRole: (role) => {
    return axiosClient.post(PATH_URL.DELETE_ROLE, role);
  },
};

export default roleApi;
