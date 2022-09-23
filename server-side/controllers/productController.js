const { Product, Image, User, Category, sequelize } = require("../models");

class productController {
  static async test(req, res, next) {
    try {
      const Products = await Product.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt']}
      });
      const Categories = await Category.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt']}
      });
      const Users = await User.findAll({
        attributes: { exclude: ['id', 'password', 'createdAt', 'updatedAt']}
      });
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
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
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) {
        throw { code: 404, msg: "Category not found" };
      }

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
        imageId1,
        image2,
        imageId2,
        categoryId,
      } = req.body;
      const { id } = req.params;
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) {
        throw { code: 404, msg: "Category not found" };
      }

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
            id: imageId1,
            productId: product.id,
            imgUrl: image1,
          },
          {
            id: imageId2,
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
