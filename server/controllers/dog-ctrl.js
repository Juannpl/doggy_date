// const models = require("../models");

// module.exports = {
//   create: async (req, res) => {
//     const { name, breed, sexe, age, dog_life } = req.body;

//     if (
//       name == "" ||
//       breed == "" ||
//       sexe == "" ||
//       age == "" ||
//       dog_life == ""
//     ) {
//       return res
//         .status(500)
//         .json({ message: "veuillez remplir tous les champs." });
//     }

//     const new_dog = await models.dog.create({
//       name: name,
//       breed: breed,
//       sexe: sexe,
//       age: age,
//       dog_life: dog_life,
//     });

//     if (new_dog) {
//       return res
//         .status(200)
//         .json({ message: "Le profil de l'animal à été crée", post: new_dog });
//     } else {
//       return res.status(400).json({ message: "erreur" });
//     }
//   },

//   update: async (req, res) => {
//     const id = req.params.id;
//     const { name, breed, sexe, age, dog_life } = req.body;

//     if (
//       name == "" ||
//       breed == "" ||
//       sexe == "" ||
//       age == "" ||
//       dog_life == ""
//     ) {
//       return res.status(500).json({ message: "veuillez remplir les champs." });
//     }

//     const post = await models.dog.findOne({
//       attributes: ["id", "text", "users_id"],
//       where: { id },
//     });
//     await post
//       .update({
//         text: text ? text : post.text,
//       })
//       .then((post) => {
//         return res
//           .status(200)
//           .json({ message: "modification effectué", post: post });
//       })
//       .catch((e) => {
//         return res
//           .status(400)
//           .json({ message: "erreur lors de la modification" });
//       });
//   },

//   delete: async (req, res) => {
//     const id = req.params.id;

//     const post = await models.dog.findOne({
//       attributes: ["id", "text", "users_id"],
//       where: { id },
//     });

//     if (post) {
//       await models.dog
//         .destroy({
//           where: { id: id },
//         })
//         .then(() => {
//           return res.status(200).json({ message: "post supprimé" });
//         })
//         .catch((e) => {
//           return res
//             .status(400)
//             .json({ message: "erreur lors de la suppression" });
//         });
//     }
//   },
//   get_all_posts: async (req, res) => {
//     await models.dog
//       .findAll({
//         attributes: ["id", "text", "users_id"],
//       })
//       .then((posts) => {
//         return res.status(200).json({ posts: posts });
//       })
//       .catch((e) => {
//         return res.status(400).json({ message: "une erreur est survenue." });
//       });
//   },
//   get_one_post: async (req, res) => {
//     const post_id = req.params.id;
//     await models.dog
//       .findOne({
//         where: { id: post_id },
//         attributes: ["id", "text", "users_id"],
//       })
//       .then((post) => {
//         return res.status(200).json({ post: post });
//       })
//       .catch((e) => {
//         return res.status(400).json({ message: "post pas trouvé" });
//       });
//   },
// };
