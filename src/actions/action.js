import * as types from "./../constants/actionTypes";
import response from "../constants/response";
import brandApi from "./../apis/brandApi";
import couponApi from "./../apis/couponApi";
import userApi from "./../apis/userApi";
// import cartApi from "./../apis/cartApi";
// import orderApi from "./../apis/orderApi";
// import addressApi from "./../apis/addressApi";

// export const authToken = (setIsLoading) => {
//   return (dispatch) => {
//     userApi
//       .authToken()
//       .then((res) => {
//         if (res.status === response.AUTH_SUCCESS) {
//           dispatch(signIn(res));
//           dispatch(getCart());
//           dispatch(getOrder());
//           dispatch(getAddress());
//         } else {
//           dispatch(signOut());
//           dispatch(deleteAllCart());
//           dispatch(deleteAllOrder());
//         }
//         if (setIsLoading !== undefined) {
//           setIsLoading(true);
//         }
//       })
//       .catch((err) => {
//         dispatch(signOut());
//         dispatch(deleteAllCart());
//         dispatch(deleteAllOrder());
//         if (setIsLoading !== undefined) {
//           setIsLoading(true);
//         }
//       });
//   };
// };

// export const signIn = (data) => {
//   return {
//     type: types.SIGN_IN,
//     payload: data,
//   };
// };

// export const signOutReq = () => {
//   return (dispatch) => {
//     userApi
//       .signOut()
//       .then((res) => {
//         if (res.status === response.SIGN_OUT_SUCCESS) {
//           dispatch(signOut());
//           dispatch(deleteAllCart());
//           dispatch(deleteAllOrder());
//         }
//       })
//       .catch((err) => {});
//   };
// };

// export const signOut = () => {
//   return {
//     type: types.SIGN_OUT,
//   };
// };

// export const getCart = () => {
//   return (dispatch) => {
//     cartApi.getCart().then((res) => {
//       if (res.status === response.SUCCESS) {
//         dispatch(initCart(res));
//       }
//     });
//   };
// };

// export const checkedCart = (value) => {
//   return (dispatch) => {
//     cartApi
//       .checkedCart(value)
//       .then((res) => {
//         if (res.status === response.SUCCESS) {
//           dispatch(getCart());
//         }
//       })
//       .catch((err) => {});
//   };
// };

// export const initCart = (values) => {
//   return {
//     type: types.INIT_CART,
//     payload: values,
//   };
// };

// export const deleteAllCart = () => {
//   return {
//     type: types.DELETE_ALL_CART,
//   };
// };

// export const deleteAllOrder = () => {
//   return {
//     type: types.DELETE_ALL_ORDER,
//   };
// };

// export const getAddress = () => {
//   return (dispatch) => {
//     addressApi
//       .getAddress()
//       .then((res) => {
//         if (res.status === response.SUCCESS) {
//           dispatch(initAddress(res));
//         }
//       })
//       .catch((err) => {});
//   };
// };

// export const initAddress = (values) => {
//   return {
//     type: types.INIT_ADDRESS,
//     payload: values,
//   };
// };

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
