import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abilities } from "../../components/Abilities/Abilities.js";
import { Experience } from "../../components/Experience/Experience.js";
import { Languages } from "../../components/Languages/Languages.js";
import { PersonalData } from "../../components/PersonalData/PersonalData.js";
import { Training } from "../../components/Training/Training.js";
import { apiConsumer } from "../../services/apiConsumer.js";
import actionCreator from "../../store/actionTypes.js";
import {
    ADD_ABILITY,
    ADD_EXPERIENCE,
    ADD_LANGUAGE,
    ADD_TRAINING,
    HANDLE_ABILITY,
    HANDLE_EXPERIENCE,
    HANDLE_INPUT,
    HANDLE_LANGUAGE,
    HANDLE_TRAINING,
    IS_EDITABLE,
    IS_NOT_EDITABLE,
    REMOVE_ABILITY,
    REMOVE_EXPERIENCE,
    REMOVE_LANGUAGE,
    REMOVE_TRAINING,
    SET_PROFILE,
  } from "../../store/typesVar.js";

export const ProfileCandidate = () => {
  const dispatch = useDispatch();
  const candidateData = useSelector
  ((state) => state.candidate);
  const formData = useSelector((state) => state.candidate.form);
  const experiences = useSelector((state) => state.candidate.experience);
  const training = useSelector((state) => state.candidate.training);
  const languages = useSelector((state) => state.candidate.languages);
  const abilities = useSelector((state) => state.candidate.abilities);
  const profile = useSelector((state) => state.candidate.profile)
  const isEditable = useSelector((state) => state.general.isEditable);


  const idUser = localStorage.getItem("id");

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    let inputData = { ...formData, [event.target.name]: event.target.value };
    dispatch(actionCreator(HANDLE_INPUT, inputData));
  };

  const handleExperienceChange = (index, event) => {
    let expData = [...experiences];
    expData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_EXPERIENCE, expData));
  };

  const handleTrainingChange = (index, event) => {
    let trainData = [...training];
    trainData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_TRAINING, trainData));
  };

  const handleLanguageChange = (event) => {
    const langData = [...languages];
    const index = langData.length - 1;
    langData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_LANGUAGE, langData));
  };

  const handleAbilityChange = (event) => {
    const abilityData = [...abilities];
    const index = abilityData.length - 1;
    abilityData[index] = event.target.value;
    dispatch(actionCreator(HANDLE_ABILITY, abilityData));
  };

  const addTraining = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_TRAINING));
  };

  const removeTraining = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_TRAINING, index));
  };

  const addExperience = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_EXPERIENCE));
  };

  const removeExperience = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_EXPERIENCE, index));
  };

  const addLanguage = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_LANGUAGE));
  };

  const removeLanguage = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_LANGUAGE, index));
  };

  const addAbility = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_ABILITY));
  };

  const removeAbility = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_ABILITY, index));
  };



  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await apiConsumer.getCandidateByUserId(idUser);

        dispatch(actionCreator(SET_PROFILE, profile))
        dispatch(actionCreator(IS_EDITABLE))
      } catch (error) {
        console.log(error);
      }
    };
    loadProfile();
  }, []);

  const registerSubmit = async (event) =>{
    event.preventDefault();
    try {
      const profileUpdated = await apiConsumer.updateCandidate()

       (profileUpdated) ? console.log('se ha actualizado con exito') : 'error'

        dispatch(actionCreator(IS_NOT_EDITABLE))
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="profile-candidate">
      {profile.map((currProfile) => {
        return (
            <div className="p-5 register-candidate-container">
            <form className="" onSubmit={(event) => registerSubmit(event)}>
              <PersonalData handleInputChange={handleInputChange} currProfile={currProfile.form}/>
              <Training handleTrainingChange={handleTrainingChange} removeTraining={removeTraining} addTraining={addTraining} currProfile={currProfile.training}/>
              <Experience handleExperienceChange={handleExperienceChange} addExperience={addExperience} removeExperience={removeExperience} currProfile={currProfile.experience}/>
              <div className="skills-lang col-11 col-md-12 col-lg-11 col-xl-8 col-xxl-6">
                <Languages handleLanguageChange={handleLanguageChange} addLanguage={addLanguage} removeLanguage={removeLanguage} currProfile={currProfile.languages}/>
                <Abilities handleAbilityChange={handleAbilityChange} addAbility={addAbility} removeAbility={removeAbility} currProfile={currProfile.abilities}/>
              </div>
              <div className="text-center col-5">
                <input className="btn btn-outline-info mb-4 col-12 col-md-6 p-2" type="submit" value="Guardar" />
              </div>
            </form>
          </div>
  )})}
  </div>
  )

  }
