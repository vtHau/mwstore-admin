import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const messageApi = {
  getAllMessage: (data) => {
    return axiosClient.post(PATH_URL.ALL_MESSAGE, data);
  },

  newMessage: (data) => {
    return axiosClient.post(PATH_URL.NEW_MESSAGE, data);
  },
};

export default messageApi;
