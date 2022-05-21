import './App.scss';
import { ErrorComponent } from './components/Error/Error';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <ErrorComponent>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </ErrorComponent>
  </div>
  );
}

export default App;
