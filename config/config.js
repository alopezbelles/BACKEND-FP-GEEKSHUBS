const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'xLqhdUjQRtThIt05DjpF',
  database: process.env.MYSQL_DATABASE || 'surf_app_fp_railway',
  host: process.env.MYSQL_HOST || 'containers-us-west-44.railway.app',
  port: process.env.MYSQL_PORT || 5982,
  dialect: process.env.DIALECT || 'mysql'

}