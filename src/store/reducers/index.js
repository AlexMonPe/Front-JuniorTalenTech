import { combineReducers } from "redux";
import { candidateReducer } from "./candidateReducer.js";
import { generalReducer } from "./generalReducer.js";


const reducers = {
    general: generalReducer,
    candidate: candidateReducer,
}

export default combineReducers(reducers);