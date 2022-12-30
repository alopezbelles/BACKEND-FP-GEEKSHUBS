const express = require('express');
const router = express.Router()


//Importamos Routes definidas en routes

const SpotsRoutes = require("./routes/spotsRoutes");
const AuthRoutes = require ("./routes/authRoutes");
const UserRoutes = require("./routes/userRoutes");
const {authBearerMiddleware} = require("./middlewares/authMiddleware")



// End-points CRUD Spots

router.use('/spots', SpotsRoutes);
router.use('/auth', AuthRoutes);
router.use(authBearerMiddleware);
router.use('/users', UserRoutes);



module.exports = router;