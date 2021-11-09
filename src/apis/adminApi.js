import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const adminApi = {
  authToken: () => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.AUTH_TOKEN);
    });
  },
  signIn: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.SIGN_IN, value);
    });
  },
  getAllAdmin: () => {
    return axiosClient.get(PATH_URL.ALL_ADMIN);
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
  // signInSocial: (social) => {
  //   return axiosClient.get(PATH_URL.SIGN_IN_SOCIAL + social);
  // },
  // signInSocialCb: (social) => {
  //   return axiosClient.get(PATH_URL.SIGN_IN_SOCIAL_CB + social);
  // },
  // signUp: (value) => {
  //   return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
  //     return axiosClient.post(PATH_URL.SIGN_UP, value);
  //   });
  // },
  // signOut: () => {
  //   return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
  //     return axiosClient.post(PATH_URL.SIGN_OUT);
  //   });
  // },
  // updateProfile: (profile) => {
  //   return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
  //     return axiosClient.post(PATH_URL.UPDATE_PROFILE, profile);
  //   });
  // },
  // updateAvatar: (fmData, config) => {
  //   return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
  //     return axiosClient.post(PATH_URL.UPDATE_AVATAR, fmData, config);
  //   });
  // },
  // updatePassword: (password) => {
  //   return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
  //     return axiosClient.post(PATH_URL.UPDATE_PASSWORD, password);
  //   });
  // },
};

export default adminApi;
