import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carte from "./pages/Carte.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Carte />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Carte />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
