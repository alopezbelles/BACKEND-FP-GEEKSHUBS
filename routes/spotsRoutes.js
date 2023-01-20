const express = require('express')
const router = express.Router();
const { authBearerMiddleware, isValidRole, isValidUser } = require("../middlewares/authMiddleware")

//Importamos modelo de datos
const SpotsController = require("../controllers/spotsController")

///// C R U D   S P O T S  /////

router.get("/", SpotsController.getAll);
router.get("/id/:id", SpotsController.getbyId);
router.get("/name/:name", SpotsController.getByName);
router.get("/toprated", SpotsController.spotsTopRated);
router.get("/lifeguard", SpotsController.spotsLifeguard);
router.post("/newspot", authBearerMiddleware, isValidRole("admin"), SpotsController.newSpot);
router.delete("/deletespot/:id", authBearerMiddleware, isValidUser(), SpotsController.deleteSpot);
router.post("/savespot", authBearerMiddleware, SpotsController.saveSpotByUser);
router.get("/myspots", SpotsController.mySpots);



module.exports = router;