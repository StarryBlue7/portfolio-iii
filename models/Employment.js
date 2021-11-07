const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employment extends Model {}

Employment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        position: {
            type: DataTypes.STRING,
        },
        start_date: {
            type: DataTypes.DATE,
        },
        end_date: {
            type: DataTypes.DATE,
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employment',
    }
);

module.exports = Employment;