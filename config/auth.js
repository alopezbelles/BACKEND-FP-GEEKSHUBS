const dotenv = require('dotenv').config();

module.exports = {
    secret: process.env.JWT_SECRET || "abretesesamo",
    expires: process.env.JWT_EXPIRES || "1d",
    rounds: process.env.JWT_ROUNDS || "10",
}