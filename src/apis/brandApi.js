import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const brandApi = {
  getAllBrand: () => {
    return axiosClient.get(PATH_URL.GET_ALL_BRAND);
  },
};

export default brandApi;
