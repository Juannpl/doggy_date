import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Log.css";
import Button from "../../components/button/Button";

const Log = () => {
  const navigate = useNavigate();
  const [activePointIndex, setActivePointIndex] = useState(0);
  const [changeContentIndex, setChangeContentIndex] = useState(0);

  const handleButtonClick = () => {
    if (activePointIndex < 4) {
      setActivePointIndex(activePointIndex + 1);
      setChangeContentIndex(changeContentIndex + 1);
    } else {
      // Redirigez l'utilisateur vers la page de connexion
      navigate("/register");
    }
  };

  return (
    <section>
      <div className="container_start">
        {/* -------------- Cinquième partie ----------------- */}

        <div
          className={`change_content ${
            changeContentIndex === 4 ? "onChange" : "offChange"
          }`}
        >
          <div className="Logo_two_parents">
            <img src="/log_logo2.png" alt="Logo d'acceuil V2" />
          </div>
          <div className="text">
            <p className="welcome_message">
              - <strong>Plus de 500 chiens</strong> ont été aidés grâce à Doggy
              Date
              <br />
              <br />- Les animaux ayant eu un rendez-vous Doggy Date ont
              <strong>un taux d'adoption 30% plus élevé.</strong>
              <br />
              <br />- <strong>Plus de 1 000 participants satisfaits</strong>
              ont partagé leur expérience
            </p>
          </div>
        </div>
        {/* -------------- Quatrième partie ----------------- */}

        <div
          className={`change_content ${
            changeContentIndex === 3 ? "onChange" : "offChange"
          }`}
        >
          <div className="Logo_two_parents">
            <img src="/log_logo2.png" alt="Logo d'acceuil V2" />
          </div>
          <div className="text">
            <h1>Ils ont fait l’expérience</h1>
            <p className="welcome_message">
              “Je n’ai pas les moyens d’accueillir un chien mais grâce à Doggy
              Date j’ai la possibilité de partager des moments incroyables avec
              nos amis canins”
              <br /> - Alex
              <br />
              <br />
              “Au départ je voulais juste tester, mais j’ai finit par adopter
              Toby au bout du 2ème rendez-vous”
              <br /> - Clair
              <br />
              <br />
              “J’ai remarqué l’évolution du caractère de Marley depuis que je le
              connais, il a l’air plus épanouie. On m’a dit qu’il allait peut
              être être adopté je suis tellement contente mais il va beaucoup me
              manquer !”
              <br /> - Odile
              <br />
              <br />
              “J’avais besoin de companie, ces animaux aussi. Merci Doggy Date”
              <br /> - Pierre
            </p>
          </div>
        </div>
        {/* -------------- Troisième partie ----------------- */}

        <div
          className={`change_content ${
            changeContentIndex === 2 ? "onChange" : "offChange"
          }`}
        >
          <div className="Logo_two_parents">
            <img src="/log_logo2.png" alt="Logo d'acceuil V2" />
          </div>
          <div className="text">
            <h1>Réservez Votre Doggy Date pour changer des vies</h1>
            <p className="welcome_message">
              Planifiez facilement votre rencontre avec un animal, sélectionnez
              la date, l'heure et le refuge de votre choix, le tout depuis
              l'application.
              <br />
              <br />
              Votre contribution aide à améliorer le bien-être des animaux et
              augmente leurs chances d'adoption.
            </p>
          </div>
        </div>
        {/* -------------- Deuxième partie ----------------- */}

        <div
          className={`change_content ${
            changeContentIndex === 1 ? "onChange" : "offChange"
          }`}
        >
          <div className="Logo_two_parents">
            <img src="/log_logo2.png" alt="Logo d'acceuil V2" />
          </div>
          <div className="text">
            <h1>Rencontrez un Ami à Quatre Pattes</h1>
            <p className="welcome_message">
              Explorez une collection de profil de chiens adorables de la SPA,
              choisissez votre compagnon pour une séance de 30 minutes de jeu et
              de câlins.
              <br />
              <br />
              Partagez des moments de joie avec des animaux en quête d'amour et
              d'attention.
            </p>
          </div>
        </div>
        {/* -------------- Première partie ----------------- */}
        <div
          className={`change_content ${
            changeContentIndex === 0 ? "onChange" : "offChange"
          }`}
        >
          <div className="Logo_parents">
            <img src="/log_logo1.png" alt="Logo d'acceuil" />
          </div>
          <div className="Logo_parents_off">
            <img src="/log_logo2.png" alt="Logo d'acceuil" />
          </div>
          <div className="text first_message">
            <p className="welcome_message">
              Doggy Date est bien plus qu'une application, c'est une communauté
              dédiée à améliorer la vie des animaux de la SPA.
              <br />
              <br />
              Rejoignez-nous pour faire une différence dans la vie de ces
              adorables compagnons à quatre pattes.
            </p>
          </div>
        </div>
        {/* Action du parcours */}
        <div className="action_route">
          <div className="welcomme_route">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`points ${
                  activePointIndex === index ? "active" : "off"
                }`}
              ></div>
            ))}
          </div>
          <div className="button_class">
            <Button next={handleButtonClick} name="Nous rejoindre" />
          </div>
          <div className="if_account">
            <a href="/login">J'ai déjà un compte</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Log;
