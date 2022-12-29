const jsonwebtoken = require("jsonwebtoken");

// Middleware para la autentificación del usuario
const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const [strategy, jwt] = authorization.split(" ");

    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }

    //   const payload = jsonwebtoken.verify(jwt, "secretjsonwebtoken");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);

    req.auth = payload;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "You are not authenticated. Please log in again" });
    return;
  }
};

// Middleware para comprobar si el rol del usuario le da autorización para acceder al endpoint deseado.

const isValidRole = (role) => (req, res, next) => {
  //   console.log(req.auth)
  if (req.auth?.role === role) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized admin" });
  }
};

module.exports = {
  isValidRole,
  authBearerMiddleware,
};
