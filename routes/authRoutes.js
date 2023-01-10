const express = require('express');
const router = express.Router();

const {
  authLoginController,
  authRegisterController
} = require("../controllers/authController");

///// C R U D   A U T H   /////

// router.post("/login", authLoginController);
router.post("/register" , authRegisterController);

module.exports = router;