'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Userspot);
      Users.belongsTo(models.Roles)

    }
  }
  Users.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_sign_up: DataTypes.DATEONLY,
    RoleIdRole: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Roles',
        key: "id_role"
      }
    },
    

  }, {
    sequelize,
    modelName: 'Users',
    timestamps: false
  });
  return Users;
};