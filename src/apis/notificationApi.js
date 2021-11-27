import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const notificationApi = {
  newNotification: (data) => {
    return axiosClient.post(PATH_URL.NEW_NOTIFICATION, data);
  },
};

export default notificationApi;
