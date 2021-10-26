import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const couponApi = {
  getAllCoupon: () => {
    return axiosClient.get(PATH_URL.ALL_COUPON);
  },
  newCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.NEW_COUPON, coupon);
  },
  updateCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.UPDATE_COUPON, coupon);
  },
  sendCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.SEND_COUPON, coupon);
  },
  deleteCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.DELETE_COUPON, coupon);
  },
};

export default couponApi;
