import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import couponReducer from "./couponReducer";

const rootReducers = combineReducers({
  brandReducer,
  couponReducer,
});

export default rootReducers;
