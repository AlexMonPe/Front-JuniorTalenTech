import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Languages = ({
  handleLanguageChange,
  addLanguage,
  removeLanguage,
  currProfile,
}) => {
  const languages = useSelector((state) => state.candidate.languages);
  const isEditable = useSelector((state) => state.general.isEditable);


  return (
    <Fragment>
      {isEditable ? (
        <div className="lang container-form-data col-12 col-md-6 mb-5">
          <h2 className="col-12 mb-3 text-center">Idiomas</h2>
          <div className="form-floating mb-5 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="language_name"
              placeholder="idioma"
              name="language_name"
              onBlur={handleLanguageChange}
            />
            <button className="btn btn-secondary m-2" onClick={addLanguage}>
              <i className="bi bi-plus-lg"></i>
            </button>
            <label htmlFor="floatingInput ">Idioma</label>
          </div>
          <div className="form-floating mb-4 col-12 col-sm-9 col-md-12 col-lg-10 col-xl-12 ">
            <select
              className="form-select"
              id="language_level"
              aria-label="Floating label select example"
              name="language_level"
              onBlur={handleLanguageChange}
            >
              <option value="">Selecciona nivel</option>
              <option value="Basico">Basico</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            <label htmlFor="floatingSelect">Nivel</label>
          </div>
          {currProfile.map((lang, index) => {
            return (
              <div className="bubble" key={index}>
                <div className="bubble ms-3">
                  {currProfile[index].language_name || ""}
                </div>
                <button onClick={(event) => removeLanguage(index, event)}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="lang container-form-data col-12 col-md-6 mb-5">
          <h2 className="col-12 mb-3 text-center">Idiomas</h2>
          <div className="form-floating mb-5 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="language_name"
              placeholder="idioma"
              name="language_name"
              onBlur={handleLanguageChange}
              defaultValue={languages.language_name}
            />
            <button className="btn btn-secondary m-2" onClick={addLanguage}>
              <i className="bi bi-plus-lg"></i>
            </button>
            <label htmlFor="floatingInput ">Idioma</label>
          </div>
          <div className="form-floating mb-4 col-12 col-sm-9 col-md-12 col-lg-10 col-xl-12 ">
            <select
              className="form-select"
              id="language_level"
              aria-label="Floating label select example"
              name="language_level"
              onBlur={handleLanguageChange}
              defaultValue={languages.level}
            >
              <option value="">Selecciona nivel</option>
              <option value="Basico">Basico</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            <label htmlFor="floatingSelect">Nivel</label>
          </div>
          {languages.map((language, index) => {
            return (
              <div className="bubble" key={index}>
                <div className="ms-3">{language.language_name}</div>
                <button onClick={(event) => removeLanguage(index, event)}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};
