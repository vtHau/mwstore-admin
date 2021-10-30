import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const axiosClientFM = axiosClient;
axiosClientFM.options = {
  headers: { "content-type": "multipart/form-data" },
};

const sliderApi = {
  getAllSlider: () => {
    return axiosClient.get(PATH_URL.ALL_SLIDER);
  },
  newSlider: (slider) => {
    return axiosClientFM.post(PATH_URL.NEW_SLIDER, slider);
  },
  updateSlider: (slider) => {
    return axiosClientFM.post(PATH_URL.UPDATE_SLIDER, slider);
  },
  deleteSlider: (slider) => {
    return axiosClient.post(PATH_URL.DELETE_SLIDER, slider);
  },
};

export default sliderApi;
