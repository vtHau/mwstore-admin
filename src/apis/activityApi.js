import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const activityApi = {
  getAllActivity: () => {
    return axiosClient.get(PATH_URL.ALL_ACTIVITY);
  },
  getActivity: (params) => {
    return axiosClient.get(PATH_URL.GET_ACTIVITY, { params });
  },
};

export default activityApi;
