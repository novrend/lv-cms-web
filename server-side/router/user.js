const router = require("express").Router();
const userController = require("../controllers/userController");
const { authentication } = require("../middleware/auth");

router.post("/login", userController.login);
router.use(authentication)
router.post("/register", userController.register);

module.exports = router;
