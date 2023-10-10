const express = require("express");
const router = express.Router();
const spa_ctrl = require("../controllers/spa-ctrl.js");

router.post("/create", spa_ctrl.create);
router.put("/uptade/:id", spa_ctrl.update_spa);
router.delete("/delete/:id", spa_ctrl.delete_spa);
// router.get("/get-all", spa_ctrl.get_all_posts);
// router.get("/get-one/:id", spa_ctrl.get_one_post);

module.exports = router;
