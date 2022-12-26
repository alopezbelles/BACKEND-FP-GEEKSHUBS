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
      SpotIdSpot: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spots',
          key: "id_spot"
        }
      },
      UserIdUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: "id_user"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Userspots');
  }
};