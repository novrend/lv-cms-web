const { Product, Image, User, Category } = require("../models");

class productController {
  static async fetchProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [{ model: User }, { model: Image }, { model: Category }],
      });
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = productController;
