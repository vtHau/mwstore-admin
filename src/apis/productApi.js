import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const productApi = {
  getAllProduct: () => {
    return axiosClient.get(PATH_URL.ALL_PRODUCT);
  },
  newProduct: (product) => {
    return axiosClient.post(PATH_URL.NEW_PRODUCT, product);
  },
  updateProduct: (product) => {
    return axiosClient.post(PATH_URL.UPDATE_PRODUCT, product);
  },
  deleteProduct: (product) => {
    return axiosClient.post(PATH_URL.DELETE_PRODUCT, product);
  },
  getProductNotPost: () => {
    return axiosClient.get(PATH_URL.PRODUCT_NOT_POST);
  },
};

export default productApi;
