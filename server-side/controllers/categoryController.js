const { Category, Product, Image } = require("../models");

class categoryController {
  static async fetchCategories(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async getCategory(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({
        where: {
          id,
        },
      });
      if (!category) {
        throw { code: 404, msg: "Category not found" };
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async getProductByCategory(req, res, next) {
    try {
      const { name } = req.query;
      const category = await Category.findOne({
        where: {
          name,
        },
        include: {
          model: Product,
          include: {
            model: Image,
          },
        },
      });
      if (!category) {
        throw { code: 404, msg: "Category not found" };
      }
      res.status(200).json(category.Products);
    } catch (error) {
      next(error);
    }
  }

  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async editCategory(req, res, next) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const findCategory = await Category.findByPk(id);
      if (!findCategory) {
        throw { code: 404, msg: "Category not found" };
      }
      const category = await Category.update(
        {
          name,
        },
        {
          where: { id },
        }
      );
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const findCategory = await Category.findByPk(id);
      if (!findCategory) {
        throw { code: 404, msg: "Category not found" };
      }
      await Category.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `Category ID ${id} deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = categoryController;
