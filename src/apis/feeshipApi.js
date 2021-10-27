import axiosClient from "./axiosClient";
import * as PATH_URL from "../constants/apiUrl";

const feeshipApi = {
  getAllFeeship: () => {
    return axiosClient.get(PATH_URL.ALL_FEESHIP);
  },
  newFeeship: (feeship) => {
    return axiosClient.post(PATH_URL.NEW_FEESHIP, feeship);
  },
  deleteFeeship: (feeship) => {
    return axiosClient.post(PATH_URL.DELETE_FEESHIP, feeship);
  },
};

export default feeshipApi;
