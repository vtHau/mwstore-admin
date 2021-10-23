import * as types from "../constants/actionTypes";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_ORDER: {
      const { orders } = action.payload;
      return { orders };
    }

    case types.DELETE_ALL_ORDER: {
      return { orders: [] };
    }

    default:
      return state;
  }
};

export default orderReducer;
