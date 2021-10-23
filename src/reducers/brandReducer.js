import * as types from "../constants/actionTypes";

const initialState = {
  brands: [],
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_BRAND: {
      const { brands } = action.payload;
      return { brands };
    }

    case types.DELETE_ALL_ORDER: {
      return { brands: [] };
    }

    default:
      return state;
  }
};

export default brandReducer;
