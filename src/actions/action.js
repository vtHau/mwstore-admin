import * as types from "./../constants/actionTypes";
import response from "../constants/response";
import brandApi from "./../apis/brandApi";
import couponApi from "./../apis/couponApi";
import userApi from "./../apis/userApi";
import addressApi from "./../apis/addressApi";
import productApi from "./../apis/productApi";
import adminApi from "./../apis/adminApi";

export const fetchAllBrand = () => {
  return (dispatch) => {
    brandApi
      .getAllBrand()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          dispatch(initBrand(res));
        }
      })
      .catch((err) => {});
  };
};

export const initBrand = (values) => {
  return {
    type: types.INIT_BRAND,
    payload: values,
  };
};

export const fetchAllCoupon = () => {
  return (dispatch) => {
    couponApi
      .getAllCoupon()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          dispatch(initCoupon(res));
        }
      })
      .catch((err) => {});
  };
};

export const initCoupon = (values) => {
  return {
    type: types.INIT_COUPON,
    payload: values,
  };
};

export const fetchAllUser = () => {
  return (dispatch) => {
    userApi
      .getAllUser()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          dispatch(initUser(res));
        }
      })
      .catch((err) => {});
  };
};

export const initUser = (values) => {
  return {
    type: types.INIT_USER,
    payload: values,
  };
};

export const fetchAllAddress = () => {
  return (dispatch) => {
    addressApi
      .getAllAddress()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          dispatch(initAddress(res));
        }
      })
      .catch((err) => {});
  };
};

export const initAddress = (values) => {
  return {
    type: types.INIT_ADDRESS,
    payload: values,
  };
};

export const fetchAllProduct = () => {
  return (dispatch) => {
    productApi
      .getAllProduct()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          dispatch(initProduct(res.data));
        }
      })
      .catch((err) => {});
  };
};

export const initProduct = (values) => {
  return {
    type: types.INIT_PRODUCT,
    payload: values,
  };
};

export const authToken = (setIsLoading) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(signOut());
      if (setIsLoading !== undefined) {
        setIsLoading(true);
      }
      return false;
    }

    adminApi
      .authToken()
      .then((res) => {
        if (res.status === response.AUTH_SUCCESS) {
          dispatch(signIn(res));
        } else {
          dispatch(signOut());
        }
        if (setIsLoading !== undefined) {
          setIsLoading(true);
        }
      })
      .catch((err) => {
        dispatch(signOut());
        if (setIsLoading !== undefined) {
          setIsLoading(true);
        }
      });
  };
};

export const signIn = (data) => {
  return {
    type: types.SIGN_IN,
    payload: data,
  };
};

export const signOutReq = () => {
  return (dispatch) => {
    adminApi
      .signOut()
      .then((res) => {
        if (res.status === response.SIGN_OUT_SUCCESS) {
          dispatch(signOut());
        }
      })
      .catch((err) => {});
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};
