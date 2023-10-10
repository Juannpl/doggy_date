const express = require("express");
const router = express.Router(); // Utilisation de express.Router()
const user_ctrl = require("../controllers/user-ctrl.js");

router.post("/register", user_ctrl.register);
router.post("/auth", user_ctrl.auth);
router.put("/update/:id", user_ctrl.update_user);
router.delete("/delete/:id", user_ctrl.delete_user);
router.get("/users", user_ctrl.get_all_users);
router.get("/me", user_ctrl.get_profile);

module.exports = router; // Utilisation de module.exports pour l'export
