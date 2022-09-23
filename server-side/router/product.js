const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", productController.fetchProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.addProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
