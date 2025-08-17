import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FacultyPage from "./pages/Faculty/FacultyPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;