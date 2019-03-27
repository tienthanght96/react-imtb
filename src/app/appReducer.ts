import { combineReducers } from "redux-immutable";
import { homeReducer } from "../home/homeReducer";
import userReducer from "../user/userReducer";
export const appReducer = combineReducers({
  homeState: homeReducer,
  userState: userReducer
});