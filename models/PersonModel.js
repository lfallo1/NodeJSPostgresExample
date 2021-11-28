const { DataTypes } = require('sequelize');

const sequelize = require('../db/connect')

const PersonModel = sequelize.define('PersonModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'firstname'
    },
    lastName: {
        type: DataTypes.STRING,
        field: 'lastname'
        // allowNull defaults to true
    },
    alias: {
        type: DataTypes.STRING,
        field: 'alias'
        // allowNull defaults to true
    },
    power: {
        type: DataTypes.DOUBLE,
        field: 'power'
        // allowNull defaults to true
    },
    type: {
        type: DataTypes.STRING,
        field: 'type'
        // allowNull defaults to true
    }
},{
    sequelize,
    schema: 'public',
    tableName: 'person',
    createdAt: 'date_created',
    updatedAt: 'last_updated'
});

PersonModel.sync();

module.exports = PersonModel;