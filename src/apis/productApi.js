import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const productApi = {
  get: (slug) => {
    return axiosClient.get(`${PATH_URL.GET_PRODUCT}${slug}`);
  },
  getProductSearch: (filters) => {
    return axiosClient.post(PATH_URL.PRODUCT_SEARCH, filters);
  },
  getProductBrand: (brandId) => {
    return axiosClient.get(`${PATH_URL.PRODUCT_BRAND}${brandId}`);
  },
  getProductNew: () => {
    return axiosClient.get(PATH_URL.PRODUCT_NEW);
  },
  getProductMore: (params) => {
    return axiosClient.get(PATH_URL.PRODUCT_MORE, { params });
  },
  getProductFeather: () => {
    return axiosClient.get(PATH_URL.PRODUCT_FEATHER);
  },
  updateView: (slug) => {
    return axiosClient.get(`${PATH_URL.UPDATE_VIEW}${slug}`);
  },
};

export default productApi;
