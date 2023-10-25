// "use strict";

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//     return queryInterface.addColumn("Users", "is_admin", {
//       type: Sequelize.BOOLEAN,
//       allowNull: false, // ou false, selon vos besoins
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   },
// };
