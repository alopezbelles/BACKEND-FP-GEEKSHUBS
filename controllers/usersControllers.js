const UsersController = {};
const models = require("../models/index");
const { encryptPasswordService } = require("../Services/AuthServices");


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODOS LOS USUARIOS (ADMIN) -------------------------------------------------

UsersController.getAllUsers = async (req, res) => {
  try {
    let resp = await models.Users.findAll({});
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

// OBTENEMOS INFORMACIÓN DE USUARIO (SOLO USUARIO)

UsersController.getData = async (req, res) => {
  let { email } = req.params;
  let resp = await models.Users.findAll({
    where: { email: email },
  });
  res.send(resp);
};

// ACTUALIZAR DATOS DE MI PERFIL (SOLO USUARIO)

UsersController.upData = async (req, res) => {
  const user = req.body;

  const userFound = await models.Users.findOne({
    where: {
      email: req.auth.email,
    },
  });

  delete user.email;
  let newPassword = userFound.password;
  if (user.password) {
    newPassword = encryptPasswordService(user.password);
  }

  let resp = await models.Users.update(
    {
      name: user.name,
      username: user.username,
      city: user.city,
      address: user.address,
      password: newPassword,
    },
    {
      where: { email: req.auth.email },
    }
  );
  res.json({
    resp,
    message: "Usuario actualizado",
  });
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

/////tengo que hacer controladores para que el admin vea los próximos viajes de los usuarios

module.exports = UsersController;
