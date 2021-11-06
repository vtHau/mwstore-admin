import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const statisticApi = {
  getStatistic: () => {
    return axiosClient.post(PATH_URL.GET_STATISTIC);
  },
  filterDate: (date) => {
    return axiosClient.post(PATH_URL.FILTER_DATE, date);
  },
  filterOther: (date) => {
    return axiosClient.post(PATH_URL.FILTER_OTHER, date);
  },
  countGeneral: () => {
    return axiosClient.post(PATH_URL.COUNT_GENERAL);
  },
};

export default statisticApi;
