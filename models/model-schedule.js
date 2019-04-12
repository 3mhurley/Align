module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
    
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      cal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      username: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      start: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      end: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    

    Schedule.associate = function(models) {
      Schedule.belongsTo(models.Calendars, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Schedule;
  };
  