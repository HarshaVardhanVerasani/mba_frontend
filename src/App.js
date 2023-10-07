import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authenticate from "./auth/Authenticate";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authenticate />} />
        <Route path="/customer" element={<LandingPage />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
