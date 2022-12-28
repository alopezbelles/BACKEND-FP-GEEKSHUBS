const express = require('express')
const router = express.Router();

//Importamos modelo de datos
const UsersController = require("../controllers/usersControllers")

///// C R U D   U S E R S  /////

router.get("/", UsersController.getAllUsers);


module.exports = router;
