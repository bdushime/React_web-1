import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FacultyPage from "./pages/Faculty/FacultyPage";
import HomePage from "./pages/Home/HomePage";
import ResearchPage from "./pages/Research/ResearchPage";
import NewsEventsSection from "./pages/NewsEventsSection";
import { ProgramsSection } from "./pages/Admission/ProgramSection";
import Layout from "./components/Layout";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/news-events" element={<NewsEventsSection />} />
        <Route path="/admission" element={<Layout />} >
          <Route index element={<ProgramsSection />} />
        </Route>
          <Route path="/testimonials" element={<Layout />} >
            <Route index element={<Testimonials />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;