// combine reducer
import { combineReducers } from "redux";
import colorReducer from "./colorReducer/colorReducer";
import counterReducer from "./counterReducer/counterReducer";

const combineReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
});

export default combineReducer;
