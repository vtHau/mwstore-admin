import * as types from "./../constants/actionTypes";

const initialState = {
  isAuth: false,
  admin: {},
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN: {
      const { token, admin } = action.payload;
      const newState = { isAuth: true, admin };

      if (token) {
        localStorage.setItem("token", token);
      }
      return { ...newState };
    }

    case types.SIGN_OUT: {
      const newState = { isAuth: false, admin: {} };

      localStorage.removeItem("token");
      return { ...newState };
    }

    default:
      return state;
  }
};

export default adminReducer;
