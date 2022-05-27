import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes.js";
import { CLOSE_POPUP } from "../../store/typesVar.js";


export const PopUp = () => {
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.general.popup);

  const closePopUp = () => {
    dispatch(actionCreator(CLOSE_POPUP));
  };
  setTimeout(closePopUp, 3000);
  return (
    <div>
      <div className="popup">
        <span>{popupState.text}</span>
      </div>
    </div>
  );
};