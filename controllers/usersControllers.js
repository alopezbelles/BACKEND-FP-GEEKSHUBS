const UsersController = {};
const models = require("../models/index");

// const jsonwebtoken = require("jsonwebtoken");
// const bcrypt = require('bcrypt');

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODOS LOS USUARIOS -------------------------------------------------

UsersController.getAllUsers = async (req, res) => {
    try {
      let resp = await models.Users.findAll({
  
      });
      res.send(resp);
    } catch (err) {
      res.send(err);
    }
  };

  module.exports = UsersController;
