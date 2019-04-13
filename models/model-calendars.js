var Sequelize = require("sequelize");
//var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Calendars = sequelize.define("Calendars", {
    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
  });

  Calendars.associate = function(models) {
    Calendars.hasMany(models.Schedules, {
      onDelete: "cascade"
    });
  };

  return Calendars;
};

