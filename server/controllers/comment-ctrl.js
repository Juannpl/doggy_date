// const jwt_utils = require("../middleware/jwt_utils");
// const models = require("../models");

// module.exports = {
//   create: async (req, res) => {
//     const { text } = req.body;
//     const authorization = req.headers["authorization"];
//     const userId = jwt_utils.get_user(authorization);

//     if (text == "") {
//       return res
//         .status(500)
//         .json({ message: "veuillez remplir tous les champs." });
//     }

//     const new_post = await models.comment.create({
//       text: text,
//       users_id: userId,
//     });

//     if (new_post) {
//       return res
//         .status(200)
//         .json({ message: "posts a été crée.", post: new_post });
//     } else {
//       return res.status(400).json({ message: "erreur" });
//     }
//   },

//   update: async (req, res) => {
//     const id = req.params.id;
//     const { text } = req.body;

//     if (text == "") {
//       return res.status(500).json({ message: "veuillez remplir le champ." });
//     }

//     const post = await models.comment.findOne({
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

//     const post = await models.comment.findOne({
//       attributes: ["id", "text", "users_id"],
//       where: { id },
//     });

//     if (post) {
//       await models.comment
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
//     await models.comment
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
//     await models.comment
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
