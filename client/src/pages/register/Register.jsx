import React, { useState, useEffect } from "react";
import env from "react-dotenv";

import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Button from "../../components/button/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [spas, setSpas] = useState([]);
  const [selectedSpa, setSelectedSpa] = useState("");
  const [activePointIndex, setActivePointIndex] = useState(0);
  const handleButtonClick = () => {
    if (activePointIndex < 1) {
      setActivePointIndex(activePointIndex + 1);
    } else {
      // Redirigez l'utilisateur vers la page de connexion
      navigate("/register");
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${env.API_URL}/spa/get-all-spas`, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("JSON", data.spas);
        setSpas(data.spas);
      });
  }, []);

  console.log("UseEffect SPA :", spas);

  const handleRegister = async (event) => {
    // event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      spa_id: selectedSpa,
    };

    if (confirmPassword !== password) {
      alert("Password not equal");
    } else {
      await registerUser(data)
        .then((data) => {
          navigate("/login");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="page_register">
      <div className="Logo_two_parents">
        <img src="/final_logo2.png" alt="Logo d'acceuil V2" />
      </div>
      <h2 className="titleRegister">Inscription</h2>

      <div className="formRegisterParents">
        <div className="formRegister">
          <div
            className={`firstRegister ${
              activePointIndex === 0 ? "onForm" : "offForm"
            }`}
          >
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
                name="firstName"
                id="firstName"
                value={firstName}
                required
              />
              <label htmlFor="firstName" className="form__label">
                Prénom
              </label>
            </div>

            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Prénom"
                name="lastName"
                id="lastName"
                value={lastName}
                required
              />
              <label htmlFor="lastName" className="form__label">
                Nom
              </label>
            </div>

            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse mail"
                name="email"
                id="email"
                value={email}
                required
              />
              <label htmlFor="email" className="form__label">
                Adresse mail
              </label>
            </div>

            <div className="form__group field">
              <input
                type="password"
                className="form__field"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                value={password}
                name="password"
                id="password"
                required
              />
              <label htmlFor="password" className="form__label">
                Mot de passe
              </label>
            </div>

            <div className="form__group field">
              <input
                type="password"
                className="form__field"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmé votre mot de passe"
                value={confirmPassword}
                name="confirmPassword"
                id="confirmPassword"
                required
              />
              <label htmlFor="password" className="form__label">
                Confirmé votre mot de passe
              </label>
            </div>

            <Button name="S'inscrire" next={handleButtonClick} />

            <div>
              <p>
                Déjà un compte ? <a href="/login">par ici !</a>
              </p>
            </div>
          </div>
          <div
            className={`twoRegister ${
              activePointIndex === 1 ? "onForm" : "offForm"
            }`}
          >
            <p className="title_spa">
              Dans quelle SPA souhaitez-vous rencontrez nos amis à 4 pattes ?
            </p>{" "}
            <div className="spaChoiceParents">
              <label className="hidden" htmlFor="pet-select">
                Choisir sa SPA
              </label>
              <select
                name="spaId"
                value={selectedSpa}
                onChange={(event) => setSelectedSpa(event.target.value)}
                id="pet-select"
              >
                <option value="">Choisir sa SPA</option>
                {spas
                  ? spas.map((spa, index) => {
                      return (
                        <option key={index} value={spa.id}>
                          {spa.name}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <Button name="Commencer" next={handleRegister} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
