import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const importApi = {
  importBrand: (brand) => {
    return axiosClient.post(PATH_URL.IMPORT_EXCEL_BRAND, brand);
  },
  importCoupon: (coupon) => {
    return axiosClient.post(PATH_URL.IMPORT_EXCEL_COUPON, coupon);
  },
};

export default importApi;
