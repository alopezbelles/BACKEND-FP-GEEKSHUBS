const express = require('express')
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken");



//Importamos modelos de datos
const UsersController = require("../controllers/usersControllers");
const { authBearerMiddleware, isValidRole, isvali, isValidUser, isValidUserID } = require("../middlewares/authMiddleware")


///// C R U D   U S E R S  /////

//Ver todos los usuarios (solo admin)
router.get("/all", authBearerMiddleware, isValidRole("admin"), UsersController.getAllUsers);


module.exports = router;
