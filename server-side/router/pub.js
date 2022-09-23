const router = require("express").Router();
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");

router.get("/product", productController.fetchProducts);
router.get("/product/:id", productController.getProduct);
router.get("/category", categoryController.fetchCategories);
router.get("/category/product", categoryController.getProductByCategory);

module.exports = router;
