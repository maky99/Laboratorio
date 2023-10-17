const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const { json, DATEONLY } = require('sequelize');


router.get('/',(req,res)=>{
    res.render('usuario');
})

router.get('/crearUsuario',(req,res)=>{
    res.render('crearUsuario');
})

//registrar usuario

router.post('/',(req,res)=>{
    const {nombre, apellido, dni, mail, password, cargo} = req.body;
    const estado = 1;
    Usuario.create({
        nombre,
        apellido,
        dni,
        password,
        mail,
        cargo,
        estado
    })
    .then(()=>{
        res.redirect('crearUsuario');
    })
    .catch(error=>{
        res.status(500).send('No se pudo crear el usuario.'+error);
    })
})
router.post('/login',(req,res)=>{
    const {dni,password} = req.body;
   
    Usuario.findOne({
    where:{ dni:dni,
        password: password
    }})
    .then((usuario)=>{
        if(usuario.cargo == "Recepcionista"){
            res.render('cargarPaciente');
        }else if(usuario.cargo == "Tecnico"){
            res.json('Bienvenido Tecnico')
        }else{
            res.json('Bienvenido Bioquimico')
        }
        
    })
    .catch(error=>{
        res.json({error_msg: req.flash('error')});
    })
})
module.exports = router;