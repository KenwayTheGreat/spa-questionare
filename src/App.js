import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { QuestionsPage } from "./Pages/QuestionsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="questions" element={<QuestionsPage />} />
    </Routes>
  );
}

export default App;
