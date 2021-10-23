import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const orderApi = {
  getOrderAll: () => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.get(PATH_URL.GET_ORDER_ALL);
    });
  },
  getOrderDetail: (id) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.get(PATH_URL.GET_ORDER_DETAIL + id);
    });
  },
  newOrder: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.NEW_ORDER, value);
    });
  },
  orderCb: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.get(PATH_URL.ORDER_CB + value);
    });
  },
};

export default orderApi;
