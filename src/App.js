import './App.scss';
import { ErrorComponent } from './components/Error/Error.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterCandidate from './containers/RegisterCandidate/RegisterCandidate.js';
import Header from './components/Header/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
    <ErrorComponent>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/registerCandidate" element={<RegisterCandidate />} ></Route>
        </Routes>
      </BrowserRouter>
    </ErrorComponent>
  </div>
  );
}

export default App;
