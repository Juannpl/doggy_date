import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesApp from "./RoutesApp";
import AdminPage from "./pages/admin_page/Admin_page";
import Home from "./pages/home/Home";
import Log from "./pages/log/Log";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesApp />} />
        <Route path="/admin/*" element={<AdminPage />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
