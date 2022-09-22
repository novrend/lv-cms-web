const router = require("express").Router();
const product = require("./product");
const error = require("../middleware/error");

router.use("/product", product);
router.use(error);

module.exports = router;
