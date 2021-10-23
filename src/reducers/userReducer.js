import * as types from "./../constants/actionTypes";

const initialState = {
  isAuth: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN: {
      const { token, user } = action.payload;
      const newState = { isAuth: true, user };

      if (token) {
        localStorage.setItem("token", token);
      }
      return { ...newState };
    }

    case types.SIGN_OUT: {
      const newState = { isAuth: false, user: {} };

      localStorage.removeItem("token");
      return { ...newState };
    }

    default:
      return state;
  }
};

export default userReducer;
