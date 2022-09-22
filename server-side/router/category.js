const router = require("express").Router();
const categoryController = require("../controllers/categoryController");
const { authentication } = require("../middleware/auth");

router.get("/", categoryController.fetchCategories);
router.get("/product", categoryController.getProductByCategory);
router.use(authentication);
router.post("/", categoryController.addCategory);
router.get("/:id", categoryController.getCategory);
router.put("/:id", categoryController.editCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
