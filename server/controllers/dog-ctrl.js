const models = require("../models");

module.exports = {
  create: async (req, res) => {
    console.log(req.body);

    const { name, breed, sexe, age, dog_life } = req.body;

    if (
      name == "" ||
      breed == "" ||
      sexe == "" ||
      age == "" ||
      dog_life == ""
    ) {
      return res
        .status(500)
        .json({ message: "veuillez remplir tous les champs." });
    }

    const new_dog = await models.Dogs.create({
      name: name,
      breed: breed,
      sexe: sexe,
      age: age,
      dog_life: dog_life,
    });

    if (new_dog) {
      return res
        .status(200)
        .json({ message: "Le profil de l'animal à été crée", post: new_dog });
    } else {
      return res.status(400).json({ message: "erreur" });
    }
  },

  update_dog: async (req, res) => {
    const id = req.params.id;
    const { name, breed, sexe, age, dog_life } = req.body;

    if (
      name == "" ||
      breed == "" ||
      sexe == "" ||
      age == "" ||
      dog_life == ""
    ) {
      return res.status(500).json({ message: "veuillez remplir les champs." });
    }

    const dog = await models.Dogs.findOne({
      attributes: ["id", "name", "breed", "sexe", "age", "dog_life", "spa_id"],
      where: { id },
    });
    await dog
      .update({
        name: name ? name : dog.name,
        breed: breed ? breed : dog.breed,
        sexe: sexe ? sexe : dog.sexe,
        age: age ? age : dog.age,
        dog_life: dog_life ? dog_life : dog.dog_life,
      })
      .then((dog) => {
        return res
          .status(200)
          .json({ message: "modification effectué", dog: dog });
      })
      .catch((e) => {
        return res
          .status(400)
          .json({ message: "erreur lors de la modification" });
      });
  },

  delete_dog: async (req, res) => {
    const id = req.params.id;

    const dog = await models.Dogs.findOne({
      attributes: ["id", "name", "breed", "sexe", "age", "dog_life", "spa_id"],
      where: { id },
    });

    if (dog) {
      await models.Dogs.destroy({
        where: { id: id },
      })
        .then(() => {
          return res.status(200).json({ message: "Dog supprimé" });
        })
        .catch((e) => {
          return res
            .status(400)
            .json({ message: "erreur lors de la suppression" });
        });
    }
  },
  get_all_dogs: async (req, res) => {
    await models.Dogs.findAll({
      attributes: ["id", "name", "breed", "sexe", "age", "dog_life", "spa_id"],
    })
      .then((dogs) => {
        return res.status(200).json({ dogs: dogs });
      })
      .catch((e) => {
        return res.status(400).json({ message: "une erreur est survenue." });
      });
  },
  get_one_dog: async (req, res) => {
    const dog_id = req.params.id;
    await models.Dogs.findOne({
      where: { id: dog_id },
      attributes: ["id", "name", "breed", "sexe", "age", "dog_life", "spa_id"],
    })
      .then((dog) => {
        return res.status(200).json({ dog: dog });
      })
      .catch((e) => {
        return res.status(400).json({ message: "dog pas trouvé" });
      });
  },
};
