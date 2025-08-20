import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FacultyPage from "./pages/Faculty/FacultyPage";
import HomePage from "./pages/Home/HomePage";
import ResearchPage from "./pages/Research/ResearchPage";
import NewsEventsSection from "./pages/NewsEventsSection";
import { ProgramsSection } from "./pages/Admission/ProgramSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/news-events" element={<NewsEventsSection />} />
        <Route path="/admission" element={<ProgramsSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;