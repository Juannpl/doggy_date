const models = require("../models"); // Importation des modèles Sequelize
const bcrypt = require("bcrypt"); // Pour le hachage des mots de passe
const validator = require("validator"); // Pour la validation des entrées utilisateur
const jwt = require("jsonwebtoken"); // Pour la gestion des tokens JWT
const jwtUtils = require("../middleware/jwtUtils.js");

require("dotenv").config({ path: "./config/.env" }); // Configuration des variables d'environnement

// Définition du nombre de rounds pour le hachage des mots de passe
const saltRounds = 10;

// Expression régulière pour valider les mots de passe (au moins 5 caractères alphanumériques)
const regexPassword = /^[a-zA-Z0-9]{5,}$/;

module.exports = {
  // Méthode pour l'enregistrement d'un nouvel utilisateur
  register: async (req, res) => {
    console.log(req.body); // Affichage des données de la requête

    // Extraction des données de la requête
    const { firstName, lastName, email, password, postal, phone, spa_id } =
      req.body;

    // Vérification des champs obligatoires
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      password == "" ||
      postal == "" ||
      phone == ""
    ) {
      return res
        .status(500)
        .json({ message: "Veuillez remplir tous les champs." });
    }

    // Validation du format du mot de passe
    if (!regexPassword.test(password)) {
      return res.status(400).json({ message: "Mot de passe invalide" });
    }

    // Validation du format de l'e-mail
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "E-mail invalide" });
    }

    // Vérification si l'utilisateur existe déjà
    const user = await models.Users.findOne({ where: { email: email } });
    if (user === null) {
      // Hachage du mot de passe
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const newUser = await models.Users.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hash,
          postal: postal,
          phone: phone,
          spa_id: spa_id,
        });
        if (newUser) {
          token = jwt.sign(
            {
              // id: newUser.id,
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              email: newUser.email,
              postal: newUser.postal,
              phone: newUser.phone,
              spa_id: newUser.spa_id,
            },
            process.env.SECRET
          );
          console.log(token);
          return res
            .status(200)
            .json({ message: "vous etes bien enregistrer", token: token });
        } else {
          return res.status(400).json({ message: "Erreur serveur." });
        }
      });
    } else {
      return res
        .status(500)
        .json({ message: "Cet e-mail existe déjà, veuillez-vous connecter." });
    }
  },

  // Méthode pour l'authentification de l'utilisateur
  auth: async (req, res) => {
    const { email, password } = req.body;
    if (email == "" || password == "") {
      return res
        .status(500)
        .json({ message: "Veuillez remplir tous les champs." });
    }
    const user = await models.Users.findOne({ where: { email: email } });
    if (user) {
      const password_valid = await bcrypt.compare(password, user.password);
      if (password_valid) {
        // Création d'un token JWT si l'authentification réussit
        token = jwt.sign(
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            postal: user.postal,
            phone: user.phone,
            spa_id: user.spa_id,
          },
          process.env.SECRET
        );
        return res.status(200).json({ token, user });
      } else {
        return res.status(400).json({ error: "Mot de passe incorrect" });
      }
    } else {
      return res.status(404).json({ error: "L'utilisateur n'existe pas" });
    }
  },

  // Méthode pour mettre à jour les informations de l'utilisateur
  update_user: async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, email, password, postal, phone } = req.body;

    // Vérification des champs obligatoires
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      password == "" ||
      postal == "" ||
      phone == ""
    ) {
      return res
        .status(500)
        .json({ message: "Veuillez remplir tous les champs." });
    }

    // Recherche de l'utilisateur par ID
    const user = await models.Users.findOne({ where: { id } });
    await user
      .update({
        firstName: firstName ? firstName : user.firstName, // Mise à jour des champs avec les nouvelles données ou les données existantes
        lastName: lastName ? lastName : user.lastName,
        email: email ? email : user.email,
        password: password ? password : user.password,
        postal: postal ? postal : user.postal,
        phone: phone ? phone : user.phone,
      })
      .then(() => {
        return res.status(200).json({ message: "Modification effectuée" });
      })
      .catch((e) => {
        return res
          .status(400)
          .json({ message: "Erreur lors de la modification" });
      });
  },

  // Méthode pour supprimer un utilisateur
  delete_user: async (req, res) => {
    const id = req.params.id;

    // Recherche de l'utilisateur par ID
    const user = await models.Users.findOne({ where: { id: id } });
    if (user) {
      await models.Users.destroy({
        where: { id: id },
      })
        .then(() => {
          return res.status(200).json({ message: "Utilisateur supprimé" });
        })
        .catch((e) => {
          return res
            .status(400)
            .json({ message: "Erreur lors de la suppression" });
        });
    }
  },

  // Méthode pour récupérer tous les utilisateurs
  get_all_users: async (req, res) => {
    await models.Users.findAll()
      .then((users) => {
        return res.status(200).json({ users: users });
      })
      .catch((e) => {
        return res.status(400).json({ message: "Une erreur est survenue." });
      });
  },

  // Méthode pour récupérer le profil d'un utilisateur
  get_profile: async (req, res) => {
    const authorization = req.headers["authorization"];
    const userId = jwtUtils.getUser(authorization);

    if (userId == null || userId == -1) {
      return res.status(400).json({ message: "Utilisateur non autorisé" });
    }

    // Recherche de l'utilisateur par ID
    await models.Users.findOne({ where: { id: userId } })
      .then((user) => {
        return res.status(200).json({ user: user });
      })
      .catch((e) => {
        return res.status(400).json({ message: "Utilisateur non trouvé" });
      });
  },
};
