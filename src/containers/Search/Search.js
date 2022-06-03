import { useEffect, useState } from "react";
import { apiConsumer } from "../../services/apiConsumer.js";

export const Search = () => {
  const [candidates, setCandidates] = useState([]);
  const [detail, setDetail] = useState();

  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState([]);
  const showDetail = async (idCandidate) => {
    console.log(idCandidate, "id");
    setDetail(await apiConsumer.getCandidateById(idCandidate));
  };

  useEffect(() => {
    const loadCandidates = async () => {
      const candidates = await apiConsumer.getAllCandidates();
      setCandidates(candidates);
    };

    loadCandidates();
  }, []);

  //   useEffect(() => {
  //     let results = [];
  //     results = candidates.filter((candidate) => {
  //       candidate.abilities.includes(searchTerm);
  //       console.log(results, "results");
  //     });
  //     setSearchResults(searchTerm ? results : candidates);
  //   }, [searchTerm]);

  //   const handleChange = (event) => {
  //     setSearchTerm(event.target.value);
  //   };

  return (
    <div className="search-container">
      <div className="container-data">
        <div className="candidates">
          {/* <input
            className="inputSearch"
            type="text"
            placeholder="Buscar por habilidad"
            onChange={handleChange}
          ></input> */}
          {candidates.map((candidate, index) => {
            return (
              <div key={index} className="candidate">
                <h5 onClick={() => showDetail(candidate._id)}>
                  {candidate.form.title}
                </h5>
                <span onClick={() => showDetail(candidate._id)}>
                  {candidate.form.name}{" "}
                </span>
                <span className="me-3">{candidate.form.surname}</span>
                <div>{candidate.form.phone_number}</div>
                <div>{candidate.form.city}</div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                  <img src="/images/search-job-icon.png"></img>
                  <span>Buscando empleo</span>
                </div>
                <div className="abilities">
                  {candidate.abilities.map((ability) => {
                    return (
                      <div className="ability">
                        <span>{ability}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="detail">
          {detail && (
            <div className="detail-container">
              <h5>Datos Personales</h5>
              <div className="form-data">
                <div>Nombre: {detail[0].form.name} </div>
                <div>Apellidos: {detail[0].form.surname}</div>
                <div>Ciudad: {detail[0].form.city}</div>
                <span>Telefono: {detail[0].form.phone_number}</span>
              </div>
              <h5>Formación</h5>
              {detail[0].training.map((training) => {
                return (
                  <div className="training">
                    <div>Nivel: {training.level}</div>
                    <div>Especialidad: {training.specialty} </div>
                    <div>Año finalización: {training.finish_year}</div>
                  </div>
                );
              })}
              <h5>Experiencia</h5>

              {detail[0].experience.map((experience) => {
                return (
                  <div className="experience">
                    <div>Empresa: {experience.company_name}</div>
                    <div>Trabajo: {experience.work_name}</div>
                    <div>
                      Año inicio: {experience.start_year} Año fin:
                      {experience.finish_year}
                    </div>
                    <div>
                      <p>Funciones:</p> {experience.functions}
                    </div>
                  </div>
                );
              })}
              <h5>Idiomas</h5>

              {detail[0].languages.map((language) => {
                return (
                  <div className="languages">
                    <div>Idioma: {language.language_name}</div>
                    <div>Nivel: {language.language_level}</div>
                  </div>
                );
              })}
              <h5>Habilidades</h5>
              {detail[0].abilities.map((ability) => {
                return (
                  <div className="abilities">
                    <div>{ability}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
