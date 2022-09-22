const router = require("express").Router();
const product = require("./product");
const category = require("./category");
const user = require("./user");
const error = require("../middleware/error");

router.use("/product", product);
router.use("/category", category);
router.use("/user", user);
router.use(error);

module.exports = router;
