const { Router } = require("express");
const { postCategory, getCategory, getAllCategory, getCategoryByID } = require("../controller/category.controller");
const upload = require("../middleware/multer.middleware");

const router = Router();

router.route("/postCategory").post(upload.single("catImg"), postCategory);
router.route("/getCategory").get( getAllCategory);
router.route("/getCategoryByid/:id").get( getCategoryByID);

module.exports = router;
