import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const productApi = {
  getAllProduct: () => {
    return axiosClient.get(PATH_URL.ALL_PRODUCT);
  },
  getTopProduct: () => {
    return axiosClient.get(PATH_URL.TOP_PRODUCT);
  },
  productCrawl: (brand) => {
    return axiosClient.post(PATH_URL.PRODUCT_CRAWL, brand);
  },
  newProduct: (product) => {
    return axiosClient.post(PATH_URL.NEW_PRODUCT, product);
  },
  newProductCrawl: (product) => {
    return axiosClient.post(PATH_URL.ADD_PRODUCT_CRAWL, product);
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
