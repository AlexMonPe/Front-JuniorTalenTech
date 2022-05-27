import { useState } from "react";
import { apiConsumer } from "../../services/apiConsumer.js";
import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes.js";
import { ADD_ABILITY, ADD_EXPERIENCE, ADD_LANGUAGE, ADD_TRAINING, HANDLE_ABILITY, HANDLE_EXPERIENCE, HANDLE_INPUT, HANDLE_LANGUAGE, HANDLE_TRAINING, REMOVE_ABILITY, REMOVE_EXPERIENCE, REMOVE_LANGUAGE, REMOVE_TRAINING } from "../../store/typesVar.js";
import { PersonalData } from "../../components/PersonalData/PersonalData.js";
import { Training } from "../../components/Training/Training.js";
import { Experience } from "../../components/Experience.js";

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
  <div className="p-5 register-candidate-container">
    <form className="" onSubmit={(e)=>registerSubmit(e)}>
      <PersonalData handleInputChange={handleInputChange}/>
      <Training handleTrainingChange={handleTrainingChange} removeTraining={removeTraining} addTraining={addTraining} />
      <Experience handleExperienceChange={handleExperienceChange} addExperience={addExperience} removeExperience={removeExperience} />
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
        {error && <div className="warning col-12 col-md-10 mx-auto mb-5">{error}</div>}
        <input className="btn btn-outline-info mb-4 col-12 col-md-6 p-2" type="submit" value="Register"/>
      </div>
    </form>
  </div>
  );
}

export default RegisterCandidate;
