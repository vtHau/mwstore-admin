import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const roleApi = {
  getAllRole: () => {
    return axiosClient.get(PATH_URL.ALL_ROLE);
  },
  updateBrand: (brand) => {
    return axiosClient.post(PATH_URL.UPDATE_BRAND, brand);
  },
  deleteBrand: (brand) => {
    return axiosClient.post(PATH_URL.DELETE_BRAND, brand);
  },
};

export default roleApi;
