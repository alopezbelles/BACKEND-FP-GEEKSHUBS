const UsersController = {};
const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require('bcrypt');


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

// Get all deleted users
// Get data from my own profile

UsersController.getData = async (req, res) => {
    let { email } = req.params;
    let resp = await models.Users.findAll({
      where: { email: email },
    });
    res.send(resp);
  };


// Update data from my own profile
// Delete a user - ADMIN ONLY


/////tengo que hacer controladores para que el admin vea los próximos viajes de los usuarios



  module.exports = UsersController;
