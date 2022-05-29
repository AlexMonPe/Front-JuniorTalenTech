import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Abilities = ({handleAbilityChange, addAbility, removeAbility}) => {
  const abilities = useSelector((state) => state.candidate.abilities)

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
            required
          />
          <button className="btn btn-secondary m-2" onClick={addAbility}>
            <i className="bi bi-plus-lg"></i>
          </button>
          <label htmlFor="floatingInput ">Habilidades</label>
        </div>
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
