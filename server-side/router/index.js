const router = require("express").Router();
const product = require("./product");
const category = require("./category");
const user = require("./user");
const pub = require("./pub");
const error = require("../middleware/error");
const { authentication } = require("../middleware/auth");

router.use("/pub", pub);
router.use("/user", user);
router.use(authentication);
router.use("/product", product);
router.use("/category", category);
router.use(error);

module.exports = router;
