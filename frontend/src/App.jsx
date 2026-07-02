import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResumeScore from "./pages/ResumeScore";
// import ResumeChecker from "./pages/ResumeChecker";
// import CoverLetter from "./pages/CoverLetter";
// import CareerCoach from "./pages/CareerCoach";

function App() {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume-score" element={<ResumeScore />} />
            {/* <Route path="/resume-checker" element={<ResumeChecker />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route path="/career-coach" element={<CareerCoach />} /> */}
        </Routes>

    );
}

export default App;