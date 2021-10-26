import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import couponReducer from "./couponReducer";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  brandReducer,
  couponReducer,
  userReducer,
});

export default rootReducers;
