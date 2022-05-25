import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";
import reducers from "./reducers/index.js";

export default createStore(reducers, devToolsEnhancer());
 