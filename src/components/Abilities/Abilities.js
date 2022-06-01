import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Abilities = ({handleAbilityChange, addAbility, currProfile, removeAbility}) => {
  const abilities = useSelector((state) => state.candidate. abilities)
  const isEditable = useSelector((state) => state.general.isEditable);
  
  return (
    <Fragment>
      <div className="skills container-form-data col-12 col-md-5 mb-5">
        <h2 className="col-12 mb-3 text-center">Habilidades</h2>
        <div className="form-floating d-flex align-items-center mb-3">
          <input
            type="text"
            className="form-control"
            id="abilities"
            placeholder="Habilidades"
            name="abilities"
            onChange={handleAbilityChange}
            defaultValue={isEditable ? currProfile[0].abilities : abilities.abilities}
          />
          <button className="btn btn-secondary m-2" onClick={addAbility}>
            <i className="bi bi-plus-lg"></i>
          </button>
          <label htmlFor="floatingInput ">Habilidades</label>
        </div>
        {isEditable && currProfile.map((ability,index)=>{
          return(<div className="bubble" key={index}>
          <div className="bubble ms-3">{ability}</div>
          <button onClick={(event) => removeAbility(index, event)}>
            <i className="bi bi-x"></i>
          </button>
        </div>)
        })}
        {abilities &&
          abilities.map((ability, index) => {
            return (
              <div className="bubble" key={index}>
                <div className="ms-3">{ability}</div>
                <button onClick={(event) => removeAbility(index, event)}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};
