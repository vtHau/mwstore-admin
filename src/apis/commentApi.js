import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const commentApi = {
  newUserComment: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.NEW_COMMENT, value);
    });
  },
  getUserComment: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.GET_COMMENT, value);
    });
  },
  getProductComment: (value) => {
    return axiosClient.post(PATH_URL.PROUDCT_COMMENT, value);
  },
  updateUserComment: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.UPDATE_COMMENT, value);
    });
  },
  deleteUserComment: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.DELETE_COMMENT, value);
    });
  },
};

export default commentApi;
