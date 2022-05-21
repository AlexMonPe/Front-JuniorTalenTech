import './App.scss';
import { ErrorComponent } from './components/Error/Error';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterCandidate from './containers/RegisterCandidate/RegisterCandidate';


function App() {
  return (
    <div className="App">
    <ErrorComponent>
      <BrowserRouter>
        <Routes>
        <Route path="/registerCandidate" element={<RegisterCandidate />} ></Route>
        </Routes>
      </BrowserRouter>
    </ErrorComponent>
  </div>
  );
}

export default App;
