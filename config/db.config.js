
const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database connection credentials
const sequelize = new Sequelize({
  database: 'eventPortal',
  username: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres', // Specify the dialect (here, PostgreSQL)
});

module.exports = {sequelize};
