const express = require("express");
const app = express();
const db = require('./db/db');
const { sequelize } = require("./models/index");

// const router = require('./router') 
const cors = require("cors"); // Import cors module


const PORT = process.env.PORT || 3613;

//CONFIGURACIÓN OPCIONES CORS
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };


app.use(express.json());
// app.use(router);
app.use(cors(corsOptions)); //Add CORS Middleware

app.get('/', (req, res) => {res.send('Pantalla de inicio');});


//Conectamos con la base de datos


// db.then(()=>{
//     app.listen(PORT, ()=> console.log(`Servidor en puerto: ${PORT}`)); 
   
// })
// .catch((err)=> console.log(err.message)); 

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
  // sequelize.sync({ force: true })
  // db.authenticate()
  db.authenticate()
    .then(() => {
      console.log("Conectados a la DB");
    })
    .catch((error) => {
      console.log("Se ha producido un error: " + error);
    });
});