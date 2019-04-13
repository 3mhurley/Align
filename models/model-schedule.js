var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Schedules = sequelize.define("Schedules", {
    
      // id: {
      //   type: Sequelize.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      cal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start: {
        type: DataTypes.STRING,
        allowNull: false
      },
      end: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    

    Schedules.associate = function(models) {
      Schedules.belongsTo(models.Calendars, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Schedules;
  };
  