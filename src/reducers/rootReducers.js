import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import couponReducer from "./couponReducer";
import userReducer from "./userReducer";
import addressReducer from "./addressReducer";
import productReducer from "./productReducer";
import adminReducer from "./adminReducer";

const rootReducers = combineReducers({
  brandReducer,
  couponReducer,
  userReducer,
  addressReducer,
  productReducer,
  adminReducer,
});

export default rootReducers;
