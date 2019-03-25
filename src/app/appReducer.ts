import { combineReducers } from "redux-immutable";
import { homeReducer } from "../home/homeReducer";
export const appReducer = combineReducers({
  homeState: homeReducer
});