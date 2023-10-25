const models = require("../models"); // Importation des modèles Sequelize

module.exports = {
  create: async (req, res) => {
    console.log(req.body);

    const { name, longitude, latitude } = req.body;

    // Vérification des champs obligatoires
    if (name == "" || longitude == "" || latitude == "") {
      return res
        .status(500)
        .json({ message: "Veuillez remplir tous les champs." });
    }
    const spa = await models.Spas.findOne({ where: { name: name } });

    if (!spa) {
      const newSpa = models.Spas.create({
        name: name,
        longitude: longitude,
        latitude: latitude,
      });

      if (newSpa) {
        return res.status(200).json({ message: "Spas ajouté !" });
      }
    } else {
      return res.status(500).json({ message: "Cette position existe déjà." });
    }
  },

  update_spa: async (req, res) => {
    const id = req.params.id;
    const { name, longitude, latitude } = req.body;

    // Vérification des champs obligatoires
    if (name == "" || longitude == "" || latitude == "") {
      return res
        .status(500)
        .json({ message: "Veuillez remplir tous les champs." });
    }

    // Recherche de l'utilisateur par ID
    const spa = await models.Spas.findOne({ where: { id } });
    await spa
      .update({
        name: name ? name : spa.name, // Mise à jour des champs avec les nouvelles données ou les données existantes
        longitude: longitude ? longitude : spa.longitude,
        latitude: latitude ? latitude : spa.latitude,
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

  delete_spa: async (req, res) => {
    const id = req.params.id;

    // Recherche de l'utilisateur par ID
    const spa = await models.Spas.findOne({ where: { id: id } });
    if (spa) {
      await models.Spas.destroy({
        where: { id: id },
      })
        .then(() => {
          return res.status(200).json({ message: "Spas supprimé" });
        })
        .catch((e) => {
          return res
            .status(400)
            .json({ message: "Erreur lors de la suppression" });
        });
    }
  },
  get_all_spas: async (req, res) => {
    console.log("get_all_spas");
    await models.Spas.findAll({
      attributes: ["id", "name", "longitude", "latitude"],
    })
      .then((spas) => {
        console.log(spas);
        return res.status(200).json(spas);
      })
      .catch((e) => {
        return res.status(400).json({ message: "une erreur est survenue." });
      });
  },
  get_one_spa: async (req, res) => {
    const spaId = req.params.id;
    await models.Spas.findOne({
      where: { id: spaId },
      attributes: ["id", "name", "longitude", "latitude"],
    })
      .then((spa) => {
        return res.status(200).json({ spa: spa });
      })
      .catch((e) => {
        return res.status(400).json({ message: "Spa pas trouvé" });
      });
  },
};
