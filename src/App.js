import './App.scss';
import { ErrorComponent } from './components/Error/Error.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterCandidate from './containers/RegisterCandidate/RegisterCandidate.js';
import { Header } from './components/Header/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './containers/Login/Login.js';
import { useSelector } from 'react-redux';
import { PopUp } from './components/Popup/Popup.js';
import { RegisterCompany } from './containers/RegisterCompany/RegisterCompany.js';
import { Home } from './components/Home/Home.js';
import { ProfileCandidate } from './containers/ProfileCandidate/ProfileCandidate.js';



function App() {
  const popupState = useSelector((state) => state.general.popup)
  return (
    <div className="App">
    <ErrorComponent>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registerCandidate" element={<RegisterCandidate />}></Route>
        <Route path="/registerCompany" element={<RegisterCompany />}></Route>
        <Route path="/profileCandidate" element={<ProfileCandidate />}></Route>
        <Route path="/login" element={<Login />}></Route>
        </Routes>
        {popupState.visible && <PopUp />}
      </BrowserRouter>
    </ErrorComponent>
  </div>
  );
}

export default App;
