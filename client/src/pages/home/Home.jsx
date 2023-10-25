import React from "react";
import "./Home.css";
import Nav_bar from "../../components/nav_bar/Nav_bar";
import Button from "../../components/button/Button";
import White_button from "../../components/button/White_button";
import { UserContext } from "../../AuthContext/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    // navigate("/");
    window.location.reload();
  };

  return (
    <section>
      <Nav_bar />
      <div className="container_start">
        <div className="text">
          <h1>Bienvenue chez Doggy Date</h1>
          <p>
            Réserve ton date avec nos toutou de la SPA pour passer du bon temps
            et leur remonter le moral.
          </p>
        </div>
        <div className="button_class">
          <button onClick={logOut}>Se déconnecter</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
