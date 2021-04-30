import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import astroReducer from "./astroReducer"
import naviBarReducer from "./naviBarReducer";

export default combineReducers({
    currentReducer,
    astroReducer,
    naviBarReducer,
})
