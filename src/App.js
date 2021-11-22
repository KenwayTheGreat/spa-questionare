import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { QuestionsPage } from "./Pages/QuestionsPage";
import { FinalPage } from "./Pages/FinalPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="questions" element={<QuestionsPage />} />
      <Route exact path="final" element={<FinalPage />} />
    </Routes>
  );
}

export default App;
