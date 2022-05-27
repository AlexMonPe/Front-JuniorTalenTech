import { useDispatch } from "react-redux";
import actionCreator from "../store/actionTypes.js";
import { SHOW_POPUP } from "../store/typesVar.js";

export const usePopup = () => {
    const dispatch = useDispatch()
      return (text) => {
      dispatch(actionCreator(SHOW_POPUP, text))
  };
};