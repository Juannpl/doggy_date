// Importation des modules nécessaires
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const Db = require("./config/db.js");

// Importation des routes
const userRoutes = require("./routes/user-routes.js");
const spaRoutes = require("./routes/spa-routes.js");

// Charger les variables d'environnement depuis le fichier .env
dotenv.config({ path: path.join(__dirname, "config", ".env") });
console.log("Environnement : " + process.env.PORT);

// Instanciation de l'application Express
const app = express();

// Gestion des fichiers statiques (les fichiers dans le dossier "public" seront servis statiquement)
app.use(express.static(path.join(__dirname, "public")));

// Middleware pour traiter les requêtes au format JSON
app.use(express.json());

// const commentRoutes = require("./routes/comment-routes.js");
// const dogRoutes = require("./routes/dog-routes.js");
// const spaRoutes = require("./routes/spa-routes.js");
app.use("/spa", spaRoutes);
app.use("/user", userRoutes);
// server.use(commentRoutes);
// server.use(dogRoutes);

// Route par défaut qui renvoie "Hello, World!" en réponse aux requêtes GET à la racine
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur Express !");
});

// Middleware pour la gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Synchronisation avec la base de données à l'aide de Sequelize
Db.sync()
  .then(() => {
    console.log("Connected to the database...");
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });

// Écoute sur le port spécifié (défini dans les variables d'environnement ou 3000 par défaut)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
