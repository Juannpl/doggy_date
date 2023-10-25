const express = require("express");
const router = express.Router();
const spa_ctrl = require("../controllers/spa-ctrl.js");

router.post("/create-spa", spa_ctrl.create);
router.put("/uptade-spa/:id", spa_ctrl.update_spa);
router.delete("/delete-spa/:id", spa_ctrl.delete_spa);
router.get("/get-all-spas", spa_ctrl.get_all_spas);
router.get("/get-one-spa/:id", spa_ctrl.get_one_spa);

module.exports = router;
