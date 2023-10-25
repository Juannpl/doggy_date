const express = require("express");
const router = express.Router();
const dog_ctrl = require("../controllers/dog-ctrl.js");

router.post("/create-dog", dog_ctrl.create);
router.put("/:id", dog_ctrl.update_dog);
router.delete("/:id", dog_ctrl.delete_dog);
router.get("/get-all-dogs", dog_ctrl.get_all_dogs);
router.get("/get-one-dog/:id", dog_ctrl.get_one_dog);

module.exports = router;
