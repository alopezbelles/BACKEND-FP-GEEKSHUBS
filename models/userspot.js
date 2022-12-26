'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userspot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Userspot.belongsTo(models.Spots)
      Userspot.belongsTo(models.Users)
    }
  }
  Userspot.init({
    id_userspot: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    SpotIdSpot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Spots',
        key: "id_spot"
      }
    },
    UserIdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: "id_user"
      }
    }
  }, {
    sequelize,
    modelName: 'Userspot',
    timestamps: false

  });
  return Userspot;
};