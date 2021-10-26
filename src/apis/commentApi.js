import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const commentApi = {
  getAllComment: () => {
    return axiosClient.get(PATH_URL.ALL_COMMENT);
  },
  getCommentNotConfirm: () => {
    return axiosClient.get(PATH_URL.NOT_CONFIRM_COMMENT);
  },
  updateComment: (comment) => {
    return axiosClient.post(PATH_URL.UPDATE_COMMENT, comment);
  },
  deleteComment: (comment) => {
    return axiosClient.post(PATH_URL.DELETE_COMMENT, comment);
  },
};

export default commentApi;
