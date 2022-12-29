const express = require('express')
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken");



//Importamos modelos de datos
const UsersController = require("../controllers/usersControllers");
const { authBearerMiddleware, isValidRole, isValidUser } = require("../middlewares/authMiddleware")


///// C R U D   U S E R S  /////

//Ver todos los usuarios (solo admin)
router.get("/all", authBearerMiddleware, isValidRole("admin"), UsersController.getAllUsers);
//Ver mi información de perfil (solo cada usuario)
router.get('/:email', authBearerMiddleware, isValidUser(), UsersController.getData);
//Actualizar información de perfil (solo cada usuario)
router.patch('/edit/:email', authBearerMiddleware, isValidUser(), UsersController.upData);
//Eliminar usuario (solo admin)
router.delete('/delete', authBearerMiddleware, isValidRole("admin"), UsersController.deleteUser);


module.exports = router;
