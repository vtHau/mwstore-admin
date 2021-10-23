import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import addressReducer from "./addressReducer";

const rootReducers = combineReducers({
  userReducer,
  cartReducer,
  orderReducer,
  addressReducer,
});

export default rootReducers;
