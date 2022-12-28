const models = require('../models/index');
const crypto = require('node:crypto');

// Servicio para comprobar si la contraseña es válida: mínimo una minúscula, una mayúscula y un número, mínimo 8 carácteres. 
const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (!pass.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }

  if (!pass.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter")
  }

  if (!pass.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number")
  }
};

// Servicio para comprobar si EMAIL es válido 
const assertEmailIsValidService = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid")
  }
};

// Servicio para comprobar si EMAIL ya está registrado 
const assertEmailIsUniqueService = async (email) => {
  const user = await models.Users.findOne({
    where: {email:email}
  });
  if (user && user.deleted == false) {
    throw new Error("Email is already registered")
  }
};

// Servicio para encriptar  constraseña y crear  hash of said password
const encryptPasswordService = (pass) => {
  const hash = crypto
    .createHmac("sha512", '')
    .update(pass)
    .digest("base64");
  return hash;
}

// Servicio para crear un nuevo usuario en la base de datos 
const createUserService = async (userBody) => {

  const hash = encryptPasswordService(userBody.password);
  userBody.password = hash;
  
  const user = await models.Users.create({
    name: userBody.name,
    username: userBody.username,
    email: userBody.email,
    password: userBody.password,
    address: userBody.address,
    city: userBody.city,
    date_of_sign_up: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    RoleIdRole: "User"
  });
  return user;
}

module.exports = {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  encryptPasswordService,
  createUserService
}