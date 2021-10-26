import * as types from "./../constants/actionTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_USER: {
      const { users } = action.payload;
      return { users };
    }

    case types.SIGN_OUT: {
      return { users: [] };
    }

    default:
      return state;
  }
};

export default userReducer;
