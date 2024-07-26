const { Router } = require("express");
const upload = require("../middleware/multer.middleware");
const { postProduct, getAllProduct, getProductByid, catidGetproduct, searchproduct } = require("../controller/product.controller");

const router = Router();

router.route("/postProduct").post(upload.single("porductImg"), postProduct);
router.route("/getallproduct").get( getAllProduct);
router.route("/getproduct/:id").get( getProductByid);
router.route("/getproductByCategory/:id").get(catidGetproduct);
router.route("/search").get(searchproduct);


module.exports = router;
