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

    await queryInterface.changeColumn("Spas", "name", {
      type: Sequelize.STRING, // ou le type de votre colonne
      unique: true, // Cette option rend la colonne unique
      allowNull: false, // Si vous voulez également la rendre obligatoire
    });
    await queryInterface.changeColumn("Spas", "longitude", {
      type: Sequelize.STRING, // ou le type de votre colonne
      unique: true, // Cette option rend la colonne unique
      allowNull: false, // Si vous voulez également la rendre obligatoire
    });
    await queryInterface.changeColumn("Spas", "latitude", {
      type: Sequelize.STRING, // ou le type de votre colonne
      unique: true, // Cette option rend la colonne unique
      allowNull: false, // Si vous voulez également la rendre obligatoire
    });
    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING, // ou le type de votre colonne
      unique: true, // Cette option rend la colonne unique
      allowNull: false, // Si vous voulez également la rendre obligatoire
    });
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
