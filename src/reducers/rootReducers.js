import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import couponReducer from "./couponReducer";
import userReducer from "./userReducer";
import addressReducer from "./addressReducer";
import productReducer from "./productReducer";

const rootReducers = combineReducers({
  brandReducer,
  couponReducer,
  userReducer,
  addressReducer,
  productReducer,
});

export default rootReducers;
