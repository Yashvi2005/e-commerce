const { Router } = require("express");
const { register, login, updateUser, userGet } = require("../controller/user.controller");
const router = Router();


router.route("/register").post(register);
router.route('/login').post(login)
router.route('/update/:id').patch(updateUser)
router.route('/userget').get(userGet)


module.exports = router;