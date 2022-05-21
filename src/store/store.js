import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

const initialState = {
    
  };

  const reducer = (state = initialState, action) => {

  };
  
  export default createStore(reducer, devToolsEnhancer());
  