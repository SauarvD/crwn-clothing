/**
 * base reducer object that represent all of the state of our application
 * code that will combine all of our states together using combineReducers
 */

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
