const express = require('express');
const router = express.Router()


//Importamos Routes definidas en routes

const SpotsRoutes = require("./routes/spotsRoutes");
const AuthRoutes = require ("./routes/authRoutes")


// End-points CRUD Spots

router.use('/spots', SpotsRoutes);
router.use('/auth', AuthRoutes)



module.exports = router;