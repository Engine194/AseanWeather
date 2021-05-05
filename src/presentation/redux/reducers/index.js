import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import astroReducer from "./astroReducer";
import hourlyReducer from "./hourlyReducer";
import naviBarReducer from "./naviBarReducer";
import searchReducer from "./searchReducer";
import dailyReducer from "./dailyReducer";
import searchApiReducer from "./searchApiReducer";

export default combineReducers({
    currentReducer,
    astroReducer,
    hourlyReducer,
    naviBarReducer,
    searchReducer,
    dailyReducer,
    searchApiReducer,
})
