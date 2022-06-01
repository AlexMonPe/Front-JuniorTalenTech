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
    ADD_ABILITY_PROFILE,
    ADD_EXPERIENCE,
    ADD_LANGUAGE,
    ADD_LANGUAGE_PROFILE,
    ADD_PROFILE_EXPERIENCE,
    ADD_PROFILE_TRAINING,
    ADD_TRAINING,
    HANDLE_ABILITY,
    HANDLE_ABILITY_PROFILE,
    HANDLE_EXPERIENCE,
    HANDLE_EXPERIENCE_PROFILE,
    HANDLE_INPUT,
    HANDLE_INPUT_PROFILE,
    HANDLE_LANGUAGE,
    HANDLE_LANGUAGE_PROFILE,
    HANDLE_TRAINING,
    HANDLE_TRAINING_PROFILE,
    IS_EDITABLE,
    IS_NOT_EDITABLE,
    REMOVE_ABILITY,
    REMOVE_ABILITY_PROFILE,
    REMOVE_EXPERIENCE,
    REMOVE_LANGUAGE,
    REMOVE_LANGUAGE_PROFILE,
    REMOVE_PROFILE_EXPERIENCE,
    REMOVE_PROFILE_TRAINING,
    REMOVE_TRAINING,
    SET_PROFILE,
  } from "../../store/typesVar.js";

export const ProfileCandidate = () => {
  const dispatch = useDispatch();
  
  const profile = useSelector((state) => state.candidate.profile);
  const formProfile = useSelector((state) => state.candidate.profile[0].form);
  const profileExperiences = useSelector((state) => state.candidate.profile[0].experience);
  const profileTraining = useSelector((state) => state.candidate.profile[0].training);
  const profileLanguages = useSelector((state) => state.candidate.profile[0].languages);
  const profileAbilities = useSelector((state) => state.candidate.profile[0].abilities);
  const profileData = useSelector((state) => state.candidate.profile[0])
  
  const idUser = localStorage.getItem("id");


  const handleInputChange = (event) => {
    let inputData = { ...formProfile, [event.target.name]: event.target.value };
    dispatch(actionCreator(HANDLE_INPUT_PROFILE, inputData));
  };

  const handleExperienceChange = (index, event) => {
    let expData = [...profileExperiences];
    expData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_EXPERIENCE_PROFILE, expData));
  };

  const handleTrainingChange = (index, event) => {
    let trainData = [...profileTraining];
    trainData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_TRAINING_PROFILE, trainData));
  };

  const handleLanguageChange = (event) => {
    const langData = [...profileLanguages];
    const index = langData.length - 1;
    langData[index][event.target.name] = event.target.value;
    dispatch(actionCreator(HANDLE_LANGUAGE_PROFILE, langData));
  };

  const handleAbilityChange = (event) => {
    const abilityData = [...profileAbilities];
    const index = abilityData.length - 1;
    abilityData[index] = event.target.value;
    dispatch(actionCreator(HANDLE_ABILITY_PROFILE, abilityData));
  };

  const addTraining = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_PROFILE_TRAINING));
  };

  const removeTraining = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_PROFILE_TRAINING, index));

  };

  const addExperience = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_PROFILE_EXPERIENCE));
  };

  const removeExperience = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_PROFILE_EXPERIENCE, index));
  };

  const addLanguage = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_LANGUAGE_PROFILE));
  };

  const removeLanguage = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_LANGUAGE_PROFILE, index));
  };

  const addAbility = (event) => {
    event.preventDefault();
    dispatch(actionCreator(ADD_ABILITY_PROFILE));
  };

  const removeAbility = (index, event) => {
    event.preventDefault();
    dispatch(actionCreator(REMOVE_ABILITY_PROFILE, index));
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
      const profileUpdate = await apiConsumer.updateCandidate(profileData);

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
