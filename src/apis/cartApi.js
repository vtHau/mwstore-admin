import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const cartApi = {
  getCart: () => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.get(PATH_URL.GET_CART);
    });
  },
  getCartChecked: () => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.get(PATH_URL.GET_CART_CHECKED);
    });
  },
  newCart: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.NEW_CART, value);
    });
  },
  checkedCart: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.CHECKED_CART, value);
    });
  },
  deleteCart: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.DELETE_CART, value);
    });
  },
};

export default cartApi;
