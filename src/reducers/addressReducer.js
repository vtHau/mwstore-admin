import * as types from "../constants/actionTypes";

const initialState = {
  address: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_ADDRESS: {
      const { cites } = action.payload;
      return { address: cites };
    }

    default:
      return state;
  }
};

export default addressReducer;
