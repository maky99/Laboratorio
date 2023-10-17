const express = require('express');
const app = express();
const sequelize = require('./dataBase/db');
const path = require('path');
const routerPaciente = require('./routers/paciente'); 
const routerUsuario = require('./routers/usuario');

const methodOverride = require('method-override');
//require('./asociaciones');

// Configuración del motor
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Configura la servida estática para archivos en el directorio 'controller'
app.use('/controller', express.static(__dirname + '/controller'));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routerPaciente);
app.use('/', routerUsuario);

sequelize
  .sync()
  .then(() => {
    console.log(`Conectado a la base de datos ${sequelize.config.database}`);
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(error => {
    console.error('Error al conectarse a la base de datos: ', error);
  });

