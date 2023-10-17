const { DataTypes, Model } = require('sequelize');
const sequelize = require('../dataBase/db');

class Usuario extends Model {}

Usuario.init({
    id_usuario:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    dni: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    password:{
        type :DataTypes.STRING,
        allowNull :false
    },
    mail: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
    
}, {
    sequelize,
    modelName: 'usuario',
    timestamps: false
});

module.exports = Usuario;

