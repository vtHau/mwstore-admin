import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const adminApi = {
  authToken: () => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.AUTH_TOKEN);
    });
  },
  signIn: (value) => {
    return axiosClient.post(PATH_URL.SIGN_IN, value);
  },
  getAllAdmin: () => {
    return axiosClient.get(PATH_URL.ALL_ADMIN);
  },
  newAdmin: (value) => {
    return axiosClient.post(PATH_URL.NEW_ADMIN, value);
  },
  updateAdmin: (value) => {
    return axiosClient.post(PATH_URL.UPDATE_ADMIN, value);
  },
  updateProfile: (value) => {
    return axiosClient.post(PATH_URL.UPDATE_PROFILE, value);
  },
  deleteAdmin: (value) => {
    return axiosClient.post(PATH_URL.DELETE_ADMIN, value);
  },
  updatePassword: (value) => {
    return axiosClient.post(PATH_URL.UPDATE_PASSWORD, value);
  },
  signOut: () => {
    return axiosClient.post(PATH_URL.SIGN_OUT);
  },

  // updatePassword: (password) => {
  //   return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
  //     return axiosClient.post(PATH_URL.UPDATE_PASSWORD, password);
  //   });
  // },
};

export default adminApi;
