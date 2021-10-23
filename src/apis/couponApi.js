import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const couponApi = {
  useCoupon: (value) => {
    return axiosClient.get(PATH_URL.BASE_URL_CSRF).then((res) => {
      return axiosClient.post(PATH_URL.USE_COUPON, value);
    });
  },
};

export default couponApi;
