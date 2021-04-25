import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import naviBarReducer from "./naviBarReducer";

export default combineReducers({
    currentReducer,
    naviBarReducer,
})
