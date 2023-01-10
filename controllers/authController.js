const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  createUserService,
  encryptPasswordService,
} = require("../services/AuthServices");
require("dotenv").config();

//REGISTRO DE USUARIO -------------------------------------------------------------------------

const authRegisterController = async (req, res) => {
  const body = req.body;

  // Comprobamos si la password tiene una estructura válida
  try {
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Invalid password, ${error.message}`);
    return;
  }
  // Comprobamos si el email tiene una estructura válida
  try {
    assertEmailIsValidService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Invalid email, ${error.message}`);
    return;
  }
  // Comprobamos que el email no está registrado ya
  try {
    await assertEmailIsUniqueService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Email is already registered`);
    return;
  }
  // Creamos el  nuevo usuario
  try {
    const UserCreated = await createUserService(body);
    res.status(201).json(UserCreated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//LOGIN USUARIO -------------------------------------------------------------------------

const authLoginController = async (req, res) => {
  

  const { email, password } = req.body;
  try {
    // Buscamos el usuario por el email
    const userFound = await models.Users.findOne({
      where: { email: email },
    });

    if (!userFound) {
      return res.status(401).json({ message: "Password or email incorrect" });
    }

    if (userFound.deleted == true) {
      return res.status(401).json({ message: "Access forbidden" });
    }
    // Encriptamos la contraseña proporcionada y comprobamos que coincide con el hash de la base de datos

    const hashedPassword = encryptPasswordService(password);

    if (hashedPassword !== userFound.password) {
      return res.status(401).json({ message: "Password or email incorrect" });
    }

    // Creamos el JSON Web Token y se lo damos al usuario
    const secret = process.env.JWT_SECRET;

    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }

    const jwt = jsonwebtoken.sign(
      {
        email: userFound.email,
        id: userFound.id_user,
        role: userFound.RoleIdRole.toLowerCase(),
        name: userFound.name,
        username: userFound.username,
        address: userFound.address,
        city: userFound.city,
      },
      secret
    );

    return res.status(200).json({
      message: "Login successful",
      jwt: jwt,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  authLoginController,
  authRegisterController,
};
