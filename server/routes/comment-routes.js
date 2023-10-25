const express = require("express");
const router = express.Router();
const comment_ctrl = require("../controllers/comment-ctrl.js");
const { imageUpload } = require("../middleware/multerConfig.js");

router.post("/create", imageUpload.single("image"), comment_ctrl.create);
router.put("/:id", imageUpload.single("image"), comment_ctrl.update_comment);
router.delete("/:id", comment_ctrl.delete_comment);
router.get("/get-all", comment_ctrl.get_all_comments);
router.get("/get-one/:id", comment_ctrl.get_one_comment);

module.exports = router;
