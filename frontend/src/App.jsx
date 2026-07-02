import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ResumeScore from "./pages/ResumeScore";
import ResumeChecker from "./pages/ResumeChecker";
import CoverLetter from "./pages/CoverLetter";
import CareerCoach from "./pages/CareerCoach";


function App() {

    return (

        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/resume/score" element={<ResumeScore/>} />
            <Route path="/resume/check" element={<ResumeChecker/>} />
            <Route path="/cover/genrator" element={<CoverLetter/>} />
            <Route path="/career/coach" element={<CareerCoach/>} />
        </Routes>

    );
}

export default App;