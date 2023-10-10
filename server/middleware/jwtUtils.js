// Importation des modules requis
const jwt = require("jsonwebtoken"); // Pour gérer les tokens JWT
require("dotenv").config({ path: "./config/.env" }); // Configuration des variables d'environnement

// Exportation d'un objet avec des méthodes pour la gestion des tokens JWT
module.exports = {
  // Méthode pour extraire le token JWT de l'en-tête "Authorization" et supprimer le préfixe "Bearer"
  verifyToken: (authorization) => {
    return authorization != null ? authorization.replace("Bearer", "") : null;
  },

  // Méthode pour extraire l'ID de l'utilisateur à partir d'un token JWT
  getUser: (authorization) => {
    // Extraction du token JWT
    const token = this.verifyToken(authorization);

    if (token != null) {
      // Vérification et décodage du token JWT en utilisant la clé secrète stockée dans les variables d'environnement
      const jwtToken = jwt.verify(token, process.env.SECRET);

      if (token != null) {
        // Si la vérification réussit, on extrait l'ID de l'utilisateur à partir du token
        const idUser = jwtToken.id;
        return idUser;
      }
    }
  },
};
