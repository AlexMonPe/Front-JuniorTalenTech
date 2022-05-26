import { useState } from "react";
import { apiConsumer } from "../../services/apiConsumer.js";
import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes.js";
import { ADD_ABILITY, ADD_EXPERIENCE, ADD_LANGUAGE, ADD_TRAINING, HANDLE_ABILITY, HANDLE_EXPERIENCE, HANDLE_INPUT, HANDLE_LANGUAGE, HANDLE_TRAINING, REMOVE_ABILITY, REMOVE_EXPERIENCE, REMOVE_LANGUAGE, REMOVE_TRAINING } from "../../store/typesVar.js";

const RegisterCandidate = () => {
  const dispatch = useDispatch();
  const candidateData = useSelector((state) => state.candidate)
  const formData = useSelector((state) => state.candidate.form)
  const experiences = useSelector((state) => state.candidate.experience)
  const training = useSelector((state) => state.candidate.training)
  const languages = useSelector((state) => state.candidate.languages)
  const abilities = useSelector((state) => state.candidate.abilities)

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    let inputData = {...formData, 
      [event.target.name] : event.target.value
    };
    dispatch(actionCreator(HANDLE_INPUT, inputData))
}
  const handleExperienceChange = (index, event) => {
    let expData = [...experiences];
    expData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_EXPERIENCE, expData))
  };
  const handleTrainingChange = (index,event) =>{
    let trainData = [...training];
    trainData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_TRAINING, trainData))
  }

  const handleLanguageChange = (event) =>{
    const langData = [...languages];
    const index = langData.length-1;
    langData[index][event.target.name] = event.target.value
    dispatch(actionCreator(HANDLE_LANGUAGE, langData))
  }

  const handleAbilityChange = (event) =>{
    const abilityData = [...abilities];
    const index = abilityData.length-1;
    abilityData[index] = event.target.value
    dispatch(actionCreator(HANDLE_ABILITY, abilityData))
  }
  const addTraining = (event) =>{
    event.preventDefault();
    dispatch(actionCreator(ADD_TRAINING))
  }

  const removeTraining = (index,event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_TRAINING, index))
  }

  const addExperience = (event) =>{
    event.preventDefault();
    dispatch(actionCreator(ADD_EXPERIENCE))
  }

  const removeExperience = (index,event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_EXPERIENCE, index))
  }

  const addLanguage = (event) =>{
    event.preventDefault();
    dispatch(actionCreator(ADD_LANGUAGE))
  }

  const removeLanguage = (index,event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_LANGUAGE, index))
  }

  const addAbility = (event) =>{
    event.preventDefault();
    dispatch(actionCreator(ADD_ABILITY))
  }

  const removeAbility = (index,event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_ABILITY, index))
  }
  const registerSubmit = async (event) => {
    event.preventDefault();

    try {
      const candidateCreated = await apiConsumer.registerCandidate(candidateData);

      (candidateCreated.error) ? setError(candidateCreated.error) : setError(false);
    } catch (error) {
      console.log(error, "Error creating candidate in frontend");
    }
  };
return (
  <div className="p-5">
    <form className="" onSubmit={(e)=>registerSubmit(e)}>
      <div className="container-form-data .flex-sm-column mb-5">
        <h2 className="col-10 mb-5 text-center">Datos personales</h2>

        <div className="form-floating mb-4 col-10 col-sm-4 col-lg-5">
          <input type="text" className="form-control" id="name" placeholder="nombre" pattern="[a-zA-Z]{2,254}" name="name" onBlur={handleInputChange} />
          <label htmlFor="floatingInput ">Nombre</label>
        </div>
        <div className="form-floating mb-4 col-10 col-sm-6">
          <input type="text" className="form-control" id="surname" placeholder="apellido" name="surname" pattern="[a-zA-Z]{2,254}" onBlur={handleInputChange}/>
          <label htmlFor="floatingInput">Apellido</label>
        </div>
        <div className="form-floating mb-4 col-10 col-sm-5 col-lg-6">
          <input type="email" className="form-control" id="email" name="email" placeholder="example@example.com" onBlur={handleInputChange} />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-4 col-10 col-sm-5 col">
          <input type="password" className="form-control" id="password" name="password" placeholder="contraseña" minLength={6} onBlur={handleInputChange} required
          />
          <label htmlFor="floatingInput">Contraseña</label>
        </div>
        <div className="form-floating mb-4 col-10 col-sm-4 col-lg-2">
          <input type="text" className="form-control" id="city" placeholder="ciudad" name="city" pattern="[a-zA-Z]{2,254}" onBlur={handleInputChange}/>
          <label htmlFor="floatingInput">Ciudad</label>
        </div>
        <div className="form-floating mb-4 col-10 col-sm-6 col-lg-4">
          <input type="tel" name="phone_number" className="form-control" id="phone_number" minLength={9} maxLength={9} placeholder="telefono" onBlur={handleInputChange}/>
          <label htmlFor="floatingInput">Teléfono</label>
        </div>
        <div className="form-floating mb-4 col-10 col-sm-11 col-md-4 col-lg-4">
          <input type="date" className="form-control" id="born_date" placeholder="dd/mm/aaaa" name="born_date" onBlur={handleInputChange}/>
          <label htmlFor="floatingInput startDate">Fecha de nacimiento</label>
        </div>
        <div className="form-floating col-10 col-sm-11 col-md-6">
          <input type="text" className="form-control" id="title" name="title" placeholder="Frontend Developer" onBlur={handleInputChange}/>
          <label htmlFor="floatingInput">Titular de tu profesión</label>
        </div>
      </div>
      {training.map((training, index)=>{
        return (
        <div className="container-form-data mb-5" key={index}>
          <h2 className="col-12 mb-4 text-center">Formación</h2>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="level" value={training.level} onChange={event=>handleTrainingChange(index,event)}>
              <option value="Selecciona">Selecciona nivel</option>
              <option value="Educacion Secundaria Obligatoria">Educacion Secundaria Obligatoria</option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Ciclo Formativo de grado Medio">Ciclo Formativo de grado Medio</option>
              <option value="Ciclo Formativo de grado Superior">Ciclo Formativo de grado Superior</option>
              <option value="Licenciatura">Licenciatura</option>
              <option value="Diplomatura">Diplomatura</option>
              <option value="Ingenieria">Ingenieria</option>
              <option value="Master">Master</option>
              <option value="Otras titulaciones">Otras titulaciones</option>
            </select>
            <label htmlFor="floatingSelect">Nivel de estudios</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <input type="text" className="form-control" id="specialty" name="specialty" value={training.specialty} placeholder="Especialidad" onChange={event=>handleTrainingChange(index,event)}/>
            <label htmlFor="floatingInput">Especialidad</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11">
            <div className="form-floating">
              <input className="form-control" placeholder="Nombre centro" id="center" name="center" value={training.center} onChange={event=>handleTrainingChange(index,event)}/>
              <label htmlFor="floatingTextarea">Centro / Universidad</label>
            </div>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5 col-lg-5">
            <input type="text" className="form-control" id="start_year" placeholder="año" name="start_year" value={training.start_year} pattern="^[0-9]+$" minLength={4} maxLength={4} onChange={event=>handleTrainingChange(index,event)}/>
            <label htmlFor="floatingInput">
              Año de inicio ( Ejemplo: 2008 )
            </label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5 col-lg-5">
            <input type="text" className="form-control" id="finish_year" placeholder="año" name="finish_year" value={training.finish_year} pattern="^[0-9]+$" minLength={4} maxLength={4} onChange={event=>handleTrainingChange(index,event)}/>
            <label htmlFor="floatingInput startDate">
              Año de fin ( Ejemplo: 2021 )
            </label>
          </div>
          <div>
            <button className="btn btn-secondary m-2" onClick={addTraining}>Añadir formación</button>
            <button className="btn btn-secondary m-2" onClick={(e) => removeTraining(index, e)}>Eliminar</button>
          </div>
      </div>
        );
        
      })}
      
      {experiences.map((experience, index)=>{
        return (
        <div className="container-form-data col-12 mb-5" key={index}>
              <h2 className="col-12 mb-4 text-center">Experiencia</h2>
              <div className="form-floating mb-4 col-12 col-sm-5">
                <input type="text" className="form-control" id="company_name" name="company_name" placeholder="Nombre empresa" value={experience.company_name} onChange={event=>handleExperienceChange(index,event)}/>
                <label htmlFor="floatingInput ">Nombre empresa</label>
              </div>
              <div className="form-floating mb-4 col-12 col-sm-5">
                <input type="text" className="form-control" id="work_name" name="work_name" placeholder="Puesto de trabajo"  value={experience.work_name} onChange={event=>handleExperienceChange(index,event)}/>
                <label htmlFor="floatingInput">Puesto de trabajo</label>
              </div>
              <div className="form-floating mb-4 col-11">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Funciones" id="functions" name="functions" style={{ height: "11em" }} value={experience.functions} onChange={event=>handleExperienceChange(index,event)}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Funciones</label>
                </div>
              </div>
              <div className="form-floating mb-4 col-10 col-sm-11 col-md-5">
                <input type="text" className="form-control" id="start_year_ex" placeholder="año" name="start_year" pattern="^[0-9]+$" minLength={4} maxLength={4} value={experience.start_year} onChange={event=>handleExperienceChange(index,event)}/>
                <label htmlFor="floatingInput">
                  Año de inicio ( Ejemplo: 2008 )
                </label>
              </div>
              <div className="form-floating mb-4 col-10 col-sm-11 col-md-5">
                <input type="text" className="form-control" id="finish_year_ex" placeholder="año" name="finish_year" pattern="^[0-9]+$" minLength={4} maxLength={4} value={experience.finish_year} onChange={event=>handleExperienceChange(index,event)}/>
                <label htmlFor="floatingInput startDate">
                  Año de fin ( Ejemplo: 2021 )
                </label>
              </div>
              <div className="">
                <button className="btn btn-secondary  m-2" onClick={addExperience}>Añadir experiencia</button>
                <button className="btn btn-secondary  m-2" onClick={(e) => removeExperience(index, e)}>Eliminar</button>
              </div>
        </div>
        );
      })}
      <div className="skills-lang col-11 col-md-12 col-lg-11 col-xl-8 col-xxl-6">
        <div className="lang container-form-data col-12 col-md-6 mb-5">
          <h2 className="col-12 mb-3 text-center">Idiomas</h2>
          <div className="form-floating mb-5 d-flex align-items-center">
            <input type="text" className="form-control" id="language_name" placeholder="idioma" name="language_name" onChange={handleLanguageChange}/>
            <button className="btn btn-secondary m-2" onClick={addLanguage}><i className="bi bi-plus-lg"></i></button>
            <label htmlFor="floatingInput ">Idioma</label>
          </div>
          <div className="form-floating mb-4 col-11">
            <select className="form-select" id="language_level" aria-label="Floating label select example" name="language_level" onBlur={handleLanguageChange}>
              <option value="selecciona">Selecciona nivel</option>
              <option value="Basico">Basico</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            <label htmlFor="floatingSelect">Nivel</label>
          </div>
          {languages && (languages.map((language, index)=>{
          return (
            <div className="bubble" key={index}>
              <div className="ms-3">{language.language_name}</div>
              <button onClick={event => removeLanguage(index, event)}><i className="bi bi-x"></i></button>
            </div>)
          }))}
        </div>
        <div className="skills container-form-data col-12 col-md-5 mb-5">
          <h2 className="col-12 mb-3 text-center">Habilidades</h2>
          <div className="form-floating d-flex align-items-center mb-3">
            <input type="text" className="form-control" id="abilities" placeholder="Habilidades" name="abilities" onChange={handleAbilityChange}/>
            <button className="btn btn-secondary m-2" onClick={addAbility}><i className="bi bi-plus-lg"></i></button>
            <label htmlFor="floatingInput ">Habilidades</label>
          </div>
          {abilities && (abilities.map((ability, index)=>{
            return(
            <div className="bubble" key={index}>
              <div className="ms-3">{ability}</div>
              <button onClick={event => removeAbility(index, event)}><i className="bi bi-x"></i></button>
            </div>)
          }))}
        </div>
      </div>
      
      <div className="text-center col-5">
        {error && <div className="warning col-5 mx-auto mb-4">{error}</div>}
        <input className="btn btn-outline-info mb-4 col-4 p-2" type="submit" value="Register"/>
      </div>
    </form>
  </div>
  );
}

export default RegisterCandidate;
