const { Model, DataTypes} = require('sequelize');
const sequelize = require('../dataBase/db');

class Paciente extends Model {}

Paciente.init({
    id_paciente:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nombre:{
        type : DataTypes.STRING(50),
        allowNull:false,
    },
    apellido:{
        type : DataTypes.STRING(128) ,
        allowNull: false
    },
    dni:{
        type : DataTypes.BIGINT(10),
        allowNull:false
    },
    edad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    fecha_de_nacimiento:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    genero:{
        type:DataTypes.STRING(6),
        allowNull:false
    },
    telefono:{
        type:DataTypes.STRING(15),
        allowNull:false
    },
    direccion:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING(64),
        allowNull:false
    },
    fecha_de_creacion:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    fecha_de_actualizacion:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }    
},{
    sequelize,
    modelName: 'paciente',
    timestamps: false
})

module.exports = Paciente;