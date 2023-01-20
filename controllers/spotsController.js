const SpotsController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENER LISTADO DE TODOS LOS SPOTS -------------------------------------------------

SpotsController.getAll = async (req, res) => {
  try {
    let resp = await models.Spots.findAll({});

    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENER SPOT POR ID -------------------------------------------------

SpotsController.getbyId = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.Spots.findAll({
      where: { id_spot: id },
    }).then((resp) => {
      res.send(resp);
    });
  } catch (err) {
    res.send(err);
  }
};

//OBTENER SPOTS POR NOMBRE -----------------------------------------------------------

SpotsController.getByName = async (req, res) => {
  try {
    let spotname = req.params.name;
    let resp = await models.Spots.findAll({
      where: { spotname: spotname },
    }).then((resp) => {
      res.send(resp);
    });
  } catch (err) {
    res.send(err);
  }
};

//OBTENER SPOTS TOP RATED-------------------------------------------------------------------------

SpotsController.spotsTopRated = async (req, res) => {
  try {
    
    let resp = await models.Spots.findAll({
      where: { rating: { [Op.gt]: 4 } },
    }).then((resp) => {
      res.send(resp);
    });
  } catch (err) {
    res.send(err);
  }
};

//OBTENER SPOTS CON SOCORRISTA-------------------------------------------------------------------------

SpotsController.spotsLifeguard = async (req, res) => {
  try {
    let lifeguard = req.params.lifeguard;
    let resp = await models.Spots.findAll({
      where: { lifeguard: true },
    }).then((resp) => {
      res.send(resp);
    });
  } catch (err) {
    res.send(err);
  }
};

//CREAR UN NUEVO SPOT-------------------------------------------------------------------------

SpotsController.newSpot = async (req, res) => {
  try {
    let spot = req.body;
    let resp = await models.Spots.create({
      spotname: spot.spotname,
      city: spot.city,
      adress: spot.adress,
      type: spot.type,
      conditions: spot.conditions,
      lifeguard: spot.lifeguard,
      length: spot.length,
      rating: spot.rating,
      imagepath: spot.imagepath,
    });

    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//ELIMINAR UN SPOT-------------------------------------------------------------------------

SpotsController.deleteSpot = async (req, res) => {
  try {
    let id = req.params.id;
    let resp = await models.Spots.destroy({
      where: { id_spot: id },
    });

    if (resp == 1) {
      res.send("Se ha eliminado el spot");
    } else {
      res.send("No se ha podido eliminar el spot");
    }
  } catch (err) {
    res.send(err);
  }
};

//GUARDAR UN SPOT POR UN USUARIO

SpotsController.saveSpotByUser = async (req, res) => {
  try {
    let data = req.body;
    
    let resp = await models.Userspot.create({
      SpotIdSpot: data.SpotIdSpot,
      UserIdUser: data.UserIdUser,
      
    });
    
    res.send(resp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//RECUPERAR SPOT GUARDADO POR USUARIO

SpotsController.mySpots = async (req, res) => {
  try {
    let id = req.params.id
    let resp = await models.Userspot.findAll({
      where: { UserIdUser: id },
      include:{
        model: models.Spots,
        
      }
      
    });
    
    
    res.send(resp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




module.exports = SpotsController;
