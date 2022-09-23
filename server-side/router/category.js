const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.fetchCategories);
router.post("/", categoryController.addCategory);
router.get("/:id", categoryController.getCategory);
router.put("/:id", categoryController.editCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
