import React, { useContext, useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthContext/UserContext";
import Button from "../../components/button/Button";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { saveUser, setUser } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    await loginUser(data)
      .then((data) => {
        console.log("#################", data);
        if (data.token) {
          // saveUser();
          localStorage.getItem("token");
        }
        console.log(data);
        setUser(data.user);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        navigate("/");
        window.location.reload();
      });
  };

  return (
    <section>
      <div className="Logo_parents">
        <img src="./log_logo1.png" alt="Logo Doggy Date" />
      </div>
      <form className="formLogin" onSubmit={handleLogin}>
        <h2>Connexion</h2>
        <div className="form__group field">
          <input
            type="email"
            className="form__field"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            required
          />
          <label htmlFor="email" className="form__label">
            Email
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

        <Button name="Connexion" type="submit" />
        <div className="">
          <p className="">
            Vous n'avez pas de compte ?
            <a href="/register" className="text-primary fw-bold">
              Inscris-toi
            </a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
