'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spots', {
      id_spot: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotname: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      conditions: {
        type: Sequelize.TEXT
      },
      lifeguard: {
        type: Sequelize.BOOLEAN
      },
      length: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      imagepath: {
        type: Sequelize.STRING
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Spots');
  }
};