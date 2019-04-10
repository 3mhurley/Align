//var Sequelize = require("sequelize");
//var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Calendars = sequelize.define("Calendars", {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    
  });

  return Calendars;
};

