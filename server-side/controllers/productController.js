const { Product, Image, User, Category, sequelize } = require("../models");

class productController {
  static async fetchProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [
          { model: User, attributes: ["username"] },
          { model: Image },
          { model: Category },
        ],
      });
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: {
          id,
        },
        include: [
          { model: User, attributes: ["username"] },
          { model: Image },
          { model: Category },
        ],
      });
      if (!product) {
        throw { code: 404, msg: "Product not found" };
      }
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async addProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, description, price, mainImg, image1, image2, categoryId } =
        req.body;
      if (!image1) throw { code: 400, msg: "Image 1 is required" };
      if (!image2) throw { code: 400, msg: "Image 2 is required" };
      if (!categoryId) throw { code: 400, msg: "Category is required" };
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) throw { code: 404, msg: "Category not found" };

      const product = await Product.create(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
          authorId: req.user.id,
        },
        { transaction: t }
      );
      await Image.bulkCreate(
        [
          {
            productId: product.id,
            imgUrl: image1,
          },
          {
            productId: product.id,
            imgUrl: image2,
          },
        ],
        { transaction: t }
      );
      await t.commit();
      res.status(201).json(product);
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        name,
        description,
        price,
        mainImg,
        image1,
        image2,
        categoryId,
      } = req.body;
      const { id } = req.params;

      if (!image1) throw { code: 400, msg: "Image 1 is required" };
      if (!image2) throw { code: 400, msg: "Image 2 is required" };
      if (!categoryId) throw { code: 400, msg: "Category is required" };

      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) throw { code: 404, msg: "Category not found" };

      const findProduct = await Product.findOne({
        include: { model: Image },
        where: { id }
      });
      if (!findProduct) throw { code: 404, msg: "Product not found" };

      const product = await Product.update(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
        },
        { where: { id }, transaction: t }
      );
      await Image.bulkCreate(
        [
          {
            id: findProduct.Images[0].id,
            productId: product.id,
            imgUrl: image1,
          },
          {
            id: findProduct.Images[1].id,
            productId: product.id,
            imgUrl: image2,
          },
        ],
        { updateOnDuplicate: ["imgUrl"], transaction: t }
      );
      await t.commit();
      res.status(200).json({
        message: `Product ID ${id} updated`,
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const findProduct = await Product.findByPk(id);
      if (!findProduct) {
        throw { code: 404, msg: "Product not found" };
      }
      await Product.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `Product ID ${id} deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = productController;
