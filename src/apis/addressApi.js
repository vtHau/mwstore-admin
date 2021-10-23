import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const addressApui = {
  getAddress: () => {
    return axiosClient.get(PATH_URL.GET_ADDRESS);
  },
  calcFeeship: (values) => {
    return axiosClient.post(PATH_URL.GET_FEESHIP, values);
  },
};

export default addressApui;
