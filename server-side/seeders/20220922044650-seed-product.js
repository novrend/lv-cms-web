"use strict";
const data = require("../db.json");
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    data.Products.forEach((el) => {
      delete el.id;
      el.description = el.description.slice(0, 254);
      el.slug = el.name.replaceAll(" ", "-").replace(/[^a-z0-9\-]/gi, "");
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Products", data.Products, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};