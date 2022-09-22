const router = require("express").Router();
const productController = require("../controllers/productController");
const { authentication } = require("../middleware/auth");

router.get("/", productController.fetchProducts);
router.use(authentication);
router.post("/", productController.addProduct);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
