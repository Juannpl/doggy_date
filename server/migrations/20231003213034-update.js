"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn("Dogs", "spa_id", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "Spas",
    //     key: "id",
    //   },
    //   onDelete: "CASCADE",
    // });
    // await queryInterface.addColumn("Users", "spa_id", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "Spas",
    //     key: "id",
    //   },
    //   onDelete: "CASCADE",
    // });
    // await queryInterface.addColumn("Comments", "User_id", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "Users",
    //     key: "id",
    //   },
    //   onDelete: "CASCADE",
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
