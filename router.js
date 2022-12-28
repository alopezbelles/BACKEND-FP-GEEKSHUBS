const express = require('express');
const router = express.Router()


//Importamos Routes definidas en routes

const SpotsRoutes = require("./routes/spotsRoutes");


// End-points CRUD Spots

router.use('/spots', SpotsRoutes);



module.exports = router;