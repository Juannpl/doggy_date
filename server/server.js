// Importation des modules nécessaires
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const Db = require("./config/db.js");
const { default: crud } = require("express-crud-router");

// Importation des routes
const userRoutes = require("./routes/user-routes.js");
const spaRoutes = require("./routes/spa-routes.js");
const dogRoutes = require("./routes/dog-routes.js");
const commentRoutes = require("./routes/comment-routes.js");

// Instanciation de l'application Express
const app = express();

// Charger les variables d'environnement depuis le fichier .env
dotenv.config({ path: path.join(__dirname, "config", ".env") });
console.log("Environnement : " + process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

// Gestion des fichiers statiques (les fichiers dans le dossier "public" seront servis statiquement)
app.use("/public", express.static(path.join(__dirname, "public")));

// Middleware pour traiter les requêtes au format JSON
app.use(express.json());

app.use("/spa", spaRoutes);
app.use("/user", userRoutes);
app.use("/dog", dogRoutes);
app.use("/comment", commentRoutes);

// Middleware pour la gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(
  crud("/admin/users", {
    getList: ({ filter, limit, offset, order }) =>
      models.Users.findAndCountAll({ limit, offset, order, where: filter }),
    getOne: (id) => models.Users.findByPk(id),
    create: (body) => models.Users.create(body),
    // update: (id, body, { req, res }) =>
    //   models.Users.update(body, { where: { id } }).then(() =>
    //     res.status(200).json({ id, ...body })
    //   ),
    destroy: (id) => models.Users.destroy({ where: { id } }),
  })
);

app.use(
  crud("/admin/comments", {
    getList: ({ filter, limit, offset, order }) =>
      models.Comments.findAndCountAll({ limit, offset, order, where: filter }),
    getOne: (id) => models.Comments.findByPk(id),
    create: (body) => models.Comments.create(body),
    // update: (id, body, { req, res }) =>
    //   models.Comments.update(body, { where: { id } }).then(() =>
    //     res.status(200).json({ id, ...body })
    //   ),
    destroy: (id) => models.Comments.destroy({ where: { id } }),
  })
);

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
