require("dotenv").config();

module.exports = {
  development: {
    database: "align_db",
    username: "root",
    password: "Bubba&Poppy1",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    database: "align_db",
    username: "root",
    password: "Bubba&Poppy1",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
