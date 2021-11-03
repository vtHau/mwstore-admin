import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const statisticApi = {
  getStatistic: () => {
    return axiosClient.post(PATH_URL.GET_STATISTIC);
  },
};

export default statisticApi;
