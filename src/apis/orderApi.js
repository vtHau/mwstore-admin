import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const orderApi = {
  getAllOrder: () => {
    return axiosClient.get(PATH_URL.ALL_ORDER);
  },
  getOrderDetail: (order) => {
    return axiosClient.post(PATH_URL.DETAIL_ORDER, order);
  },
  confirmOrder: (order) => {
    return axiosClient.post(PATH_URL.CONFIRM_ORDER, order);
  },
  udpateStatus: (data) => {
    return axiosClient.post(PATH_URL.UPDATE_STATUS, data);
  },
  deleteOrder: (order) => {
    return axiosClient.post(PATH_URL.DELETE_ORDER, order);
  },
};

export default orderApi;
