import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const couponApi = {
  getAllCoupon: () => {
    return axiosClient.get(PATH_URL.ALL_COUPON);
  },
  updateCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.UPDATE_COUPON, coupon);
  },
  deleteCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.DELETE_COUPON, coupon);
  },
};

export default couponApi;
