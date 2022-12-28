const express = require('express')
const router = express.Router();

//Importamos modelo de datos
const SpotsController = require("../controllers/spotsController")

///// C R U D   S P O T S  /////

router.get("/spots", SpotsController.getAll);
router.get("/id/:id", SpotsController.getbyId);



module.exports = router;