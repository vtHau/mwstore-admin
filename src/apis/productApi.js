import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const productApi = {
  getAllProduct: () => {
    return axiosClient.get(PATH_URL.ALL_PRODUCT);
  },
};

export default productApi;
