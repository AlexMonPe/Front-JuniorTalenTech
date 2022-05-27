import { useDispatch } from "react-redux";
import actionCreator from "../store/actionTypes";
import { SHOW_POPUP } from "../store/typesVar";

const usePopup = () => {
    const dispatch = useDispatch()
      return (text) => {
      dispatch(actionCreator(SHOW_POPUP, text))
  };
};
export default usePopup;