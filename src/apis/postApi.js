import axiosClient from "./axiosClient";
import * as PATH_URL from "../constants/apiUrl";

const postApi = {
  getAllPost: () => {
    return axiosClient.get(PATH_URL.ALL_POST);
  },
  getPost: (post) => {
    return axiosClient.post(PATH_URL.GET_POST, post);
  },
  updatePost: (post) => {
    return axiosClient.post(PATH_URL.UPDATE_POST, post);
  },
  deletePost: (post) => {
    return axiosClient.post(PATH_URL.DELETE_POST, post);
  },
};

export default postApi;
