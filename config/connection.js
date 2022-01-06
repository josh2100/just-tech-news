const Sequelize = require("sequelize");

// To secure password
require("dotenv").config();

// create connection to our db
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     host: "127.0.0.1", // localhost for normal people
//     dialect: "mysql",
//     port: 3306, // Connection to MySQL protocol
//   }
// );

let sequelize;
// If hosted on Heroku with JawsDB
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Else configure for local computer
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "127.0.0.1",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
