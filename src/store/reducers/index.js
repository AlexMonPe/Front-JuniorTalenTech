import { combineReducers } from "redux";
import { candidateReducer } from "./candidateReducer.js";


const reducers = {
    candidate: candidateReducer,
}

export default combineReducers(reducers);