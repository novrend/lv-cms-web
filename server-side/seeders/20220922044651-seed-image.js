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
    data.Images.forEach((el) => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Images", data.Images, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Images", null, {});
  },
};