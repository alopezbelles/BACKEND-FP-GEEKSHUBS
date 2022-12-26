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
      // define association here
    }
  }
  Userspot.init({
    id_userspot: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Userspot',
    timestamps: false

  });
  return Userspot;
};