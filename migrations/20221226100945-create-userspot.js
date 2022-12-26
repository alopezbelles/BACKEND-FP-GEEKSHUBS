'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Userspots', {
      id_userspot: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Userspots');
  }
};