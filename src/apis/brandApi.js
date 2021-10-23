import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const brandApi = {
  getAllBrand: () => {
    return axiosClient.get(PATH_URL.GET_ALL_BRAND);
  },
  updateBrand: (brand) => {
    return axiosClient.post(PATH_URL.UPDATE_BRAND, brand);
  },
  deleteBrand: (brand) => {
    return axiosClient.post(PATH_URL.DELETE_BRAND, brand);
  },
};

export default brandApi;
