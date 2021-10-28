import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const orderApi = {
  getAllOrder: () => {
    return axiosClient.get(PATH_URL.ALL_ORDER);
  },
  confirmOrder: (order) => {
    return axiosClient.post(PATH_URL.CONFIRM_ORDER, order);
  },
  deleteOrder: (order) => {
    return axiosClient.post(PATH_URL.DELETE_ORDER, order);
  },
};

export default orderApi;
