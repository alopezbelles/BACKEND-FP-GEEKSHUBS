const SpotsController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODOS LOS SPOTS -------------------------------------------------

SpotsController.getAll = async (req, res) => {
  try {
    let resp = await models.Spots.findAll({});

    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS SPOT POR ID -------------------------------------------------

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

//OBTENEMOS SPOTS POR NOMBRE -----------------------------------------------------------

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

//OBTENEMOS SPOTS TOP RATED-------------------------------------------------------------------------

SpotsController.spotsTopRated = async (req, res) => {
  try {
    // const id = req.params.id;
    let resp = await models.Spots.findAll({
      
      where: {rating: {[Op.gt]: 4}},
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS SPOTS CON SOCORRISTA-------------------------------------------------------------------------

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






module.exports = SpotsController;
