import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const sliderApi = {
  getAll: () => {
    return axiosClient.get(PATH_URL.GET_SLIDER);
  },
};

export default sliderApi;
