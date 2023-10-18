const express = require('express');
const router = express.Router();
const Paciente = require('../models/paciente');


router.get('/cargarPaciente', (req, res) => {
    res.render('paciente');
});

router.get('/buscarPaciente', (req, res) => {
    const dni = req.query.dni;
    console.log(`DNI recibido en la solicitud GET: ${dni}`); // Agrega esta línea
    Paciente.findOne({
        where: {
            dni: dni
        }
    })
        .then(paciente => {
            if (paciente) {
                console.log('Paciente encontrado en la base de datos'); // Agrega esta línea
                res.json(paciente);
            } else {
                console.log('Paciente no encontrado en la base de datos'); // Agrega esta línea
                res.json('No se encontró paciente');
            }
        })
        .catch(error => {
            console.error(error);
            res.json('No se encontró paciente');
        });
});

router.get('/buscarApellido', async (req, res) => {
    const apellido = req.query.apellido;

    try {
        const { rows: pacientes, count: total } = await Paciente.findAndCountAll({
            where: { apellido: apellido }
        });

        if (total > 0) {
            res.json({ pacientes, total });
            console.log(pacientes, total);
        } else {
            res.json('No se encontró paciente');
        }
    } catch (error) {
        console.error(error);
        res.json('Error en la búsqueda de pacientes por apellido');
    }
});

router.get('/buscarEmail', (req, res) => {
    const mail = req.query.mail;

    Paciente.findOne({
        where: { mail: mail }
    })
        .then(paciente => {
            if (paciente) {
                res.json(paciente);
            } else {
                res.json('No se encontró paciente');
            }
        })
        .catch(error => {
            console.error(error);
            res.json('No se encontró paciente');
        });
})

router.put('/actualizar', async (req, res) => {
    try {
        const { nombre, apellido, dni, edad, fecha_de_nacimiento, genero, telefono, direccion, mail } = req.body;
        const fecha_de_actualizacion = new Date();

        // Definir el objeto "paciente" usando el modelo de paciente
        const paciente = await Paciente.findOne({
            where: {
                dni: dni
            }
        });

        if (paciente) {
            // Asignar los valores a las propiedades del paciente
            paciente.nombre = nombre;
            paciente.apellido = apellido;
            paciente.dni = dni;
            paciente.edad = edad;
            paciente.fecha_de_nacimiento = fecha_de_nacimiento;
            paciente.genero = genero;
            paciente.telefono = telefono;
            paciente.direccion = direccion;
            paciente.mail = mail;
            paciente.fecha_de_actualizacion = fecha_de_actualizacion;

            // Guardar los cambios
            await paciente.save();

            res.json('Paciente Actualizado!');
        } else {
            res.json('Paciente no encontrado en la base de datos');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Error al actualizar el paciente');
    }
});

router.post('/pacienteCargado', (req, res) => {
    const { nombre, apellido, dni, edad, fecha_de_nacimiento, genero, telefono, direccion, mail } = req.body;
    const estado = true;
    const fecha_de_creacion = new Date();
    const fecha_de_actualizacion = new Date();

    Paciente.create({
        nombre, apellido, dni, edad, fecha_de_nacimiento, genero, telefono, direccion, mail, fecha_de_creacion, fecha_de_actualizacion, estado
    })
        .then(() => {
            res.json('Paciente creado con éxito');
        })
        .catch(error => {
            console.error(error);
            res.json('No se pudo crear el paciente');
        });
});
module.exports = router;