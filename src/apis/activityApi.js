import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const activityApi = {
  getActivity: () => {
    return axiosClient.get(PATH_URL.GET_ACTIVITY);
  },
};

export default activityApi;
