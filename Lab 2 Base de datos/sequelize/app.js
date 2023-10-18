const express = require('express')
const Sequelize = require('sequelize')
const app = express()

//definiendo los parametros de conexion a la base de datos 

const sequelize = new Sequelize('postres_database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


//definimos el modelo
const postresModel = sequelize.define('postres', {
    "id": { type: Sequelize.INTEGER, primaryKey: true },
    "nombre": Sequelize.STRING,
    "calorias": Sequelize.INTEGER,
})

sequelize.authenticate()
    .then(() => {
        console.log("conectado a base de datos ok")
    })
    .catch(error => {
        console.log("error de conexion : " + error)
    })

app.listen(3000, () => {
    console.log("conectado al puerto 3000")
})

//muestro todo loque tengo enla tabla 
postresModel.findAll({ attributes: ['nombre', 'calorias'] })
    .then(postres => {
        const trrae = JSON.stringify(postres)
        console.log(trrae)
    })
    .catch(error => {
        console.log("salio error : " + error)
    })

// const express = require('express')
// const Sequelize = require('sequelize')
// const app = express()

// //definiendo los parametros de conexion a la base de datos

// const sequelize = new Sequelize('nombre', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// })


// //definimos el modelo
// const registroModel = sequelize.define('registro', {
//     "dni": { type: Sequelize.INTEGER, primaryKey: true },
//     "apellido": Sequelize.STRING,
//     "nombre": Sequelize.STRING,
// })

// // sequelize.authenticate()
// sequelize.sync()
//     .then(() => {
//         console.log("conectado a base de datos ok")
//     })
//     .catch(error => {
//         console.log("error de conexion : " + error)
//     })

// app.listen(3000, () => {
//     console.log("conectado al puerto 3000")
// })

// //muestro todo loque tengo enla tabla
// registroModel.findAll({ attributes: ['apellido', 'nombre'] })
//     .then(registro => {
//         const trrae = JSON.stringify(registro)
//         console.log(trrae)
//     })
//     .catch(error => {
//         console.log("salio error : " + error)
//     })