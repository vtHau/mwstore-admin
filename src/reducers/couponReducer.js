import * as types from "../constants/actionTypes";

const initialState = {
  coupons: [],
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_COUPON: {
      const coupons = action.payload;
      return { coupons };
    }

    default:
      return state;
  }
};

export default couponReducer;
