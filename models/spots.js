'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spots.init({
    id_spot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    spotname: DataTypes.STRING,
    city: DataTypes.STRING,
    adress: DataTypes.TEXT,
    type: DataTypes.STRING,
    conditions: DataTypes.TEXT,
    lifeguard: DataTypes.BOOLEAN,
    length: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    imagepath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Spots',
    timestamps: false

  });
  return Spots;
};