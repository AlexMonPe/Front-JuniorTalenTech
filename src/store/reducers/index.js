import { combineReducers } from "redux";
import { candidateReducer } from "./candidateReducer.js";
import { companyReducer } from "./companyReducer.js";
import { generalReducer } from "./generalReducer.js";


const reducers = {
    general: generalReducer,
    candidate: candidateReducer,
    company: companyReducer,
}

export default combineReducers(reducers);