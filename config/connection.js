const Sequelize = require("sequelize");

// To secure password
require("dotenv").config();

// create connection to our db
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "127.0.0.1", // localhost for normal people
    dialect: "mysql",
    port: 3306, // Connection to MySQL protocol
  }
);

module.exports = sequelize;
