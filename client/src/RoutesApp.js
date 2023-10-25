import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Log from "./pages/log/Log";
import Profile from "./pages/profile/Profile";
import CustomNavbar from "./components/nav_bar/Nav_bar";
import { UserContext } from "./AuthContext/UserContext";

const RoutesApp = () => {
  const { saveUser } = useContext(UserContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      saveUser();
    }
  }, []);

  return (
    <>
      {/* <CustomNavbar /> */}
      <Routes>
        <Route path="/register" element={token ? <Home /> : <Register />} />
        {/* <Route path="/login" element={token ? <Home /> : <Login />} /> */}
        <Route path="/" element={token ? <Home /> : <Log />} />
        {/* <Route path="/profile" element={token ? <Profile /> : <Log />} /> */}
        {/* <Route path="/log" element={<Log />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
};

export default RoutesApp;
