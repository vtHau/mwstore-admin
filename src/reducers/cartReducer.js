import * as types from "../constants/actionTypes";

const initialState = {
  carts: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_CART: {
      const { carts, total_price: totalPrice } = action.payload;
      return { carts, totalPrice };
    }

    case types.DELETE_ALL_CART: {
      return { carts: [], totalPrice: 0 };
    }

    default:
      return state;
  }
};

export default cartReducer;
