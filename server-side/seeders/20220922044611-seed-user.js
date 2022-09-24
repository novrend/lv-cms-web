"use strict";
const data = require("../db.json");
const { hashBcrypt } = require("../helpers");
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
    data.Users.forEach((el) => {
      delete el.id;
      el.password = hashBcrypt(el.password);
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", data.Users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};