const UsersController = {};
const models = require("../models/index");
const { encryptPasswordService } = require("../services/AuthServices");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENER LISTADO DE TODOS LOS USUARIOS (ADMIN) -------------------------------------------------

UsersController.getAllUsers = async (req, res) => {
  try {
    let resp = await models.Users.findAll({});
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

// OBTENER INFORMACIÓN DE USUARIO

UsersController.getData = async (req, res) => {
  let user = req.auth;
  let { email } = req.params;
  // console.log(user)
  // let resp = await models.Users.findAll({
  //   where: { email: email },
  // });
  res.send(user);
};

// ACTUALIZAR DATOS DE MI PERFIL

UsersController.upData = async (req, res) => {
  try {
    const user = req.body;

    const userFound = await models.Users.findOne({
      where: {
        email: req.auth.email,
      },
    });

    let resp = await models.Users.update(
      {
        username: user.username,
        email: user.email,
      },
      {
        where: { email: req.auth.email },
      }
    );
    res.json({
      resp,
      message: "Usuario actualizado",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// ELIMINAR USUARIO (ADMIN)

UsersController.deleteUser = async (req, res) => {
  const { email } = req.body;
  let resp = await models.Users.destroy({ where: { email: email } });
  res.json({
    resp,
    message: "Usuario eliminado",
  });
};

module.exports = UsersController;
