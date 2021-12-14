import * as types from "../constants/actionTypes";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_PRODUCT: {
      const products = action.payload;
      return { products };
    }

    default:
      return state;
  }
};

export default productReducer;
