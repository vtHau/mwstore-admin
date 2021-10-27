import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import couponReducer from "./couponReducer";
import userReducer from "./userReducer";
import addressReducer from "./addressReducer";

const rootReducers = combineReducers({
  brandReducer,
  couponReducer,
  userReducer,
  addressReducer,
});

export default rootReducers;
