//var Sequelize = require("sequelize");
//var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Calendars = sequelize.define("Calendars", {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeperiod: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  
  Calendars.associate = function(models) {
    Calendars.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Calendars;
};

