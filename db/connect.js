const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_CONN_STRING) // Example for postgres

module.exports = sequelize;