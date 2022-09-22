const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", productController.fetchProducts)

module.exports = router;
