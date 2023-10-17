const { DataTypes, Model } = require('sequelize');
const sequelize = require('../dataBase/db');

class Orden_de_trabajo  extends Model {}

Orden_de_trabajo.init({
    id_or_de_trabajo:{
        type:DataTypes.INTEGER(),
        allowNull : false ,
        primaryKey:true
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    medico_solicitante:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    motivo_de_pedido:{
        type:DataTypes.TEXT("long"),
        allowNull: false
    },
    observaciones:{
        type:DataTypes.TEXT("medium"),
        allowNull:false
    },
    fechaDeCreacion: {
        type: DataTypes.DATEONLY, // O DataTypes.DATEONLY si solo quieres almacenar la fecha
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Esto establecerá la fecha actual al crear un registro
    },
},{
    sequelize,
    modelName: 'ordene_de_trabajo',
    timestamps:false
})

module.exports = Orden_de_trabajo;