import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const addressApi = {
  getAllAddress: () => {
    return axiosClient.get(PATH_URL.ALL_ADDRESS);
  },
};

export default addressApi;
