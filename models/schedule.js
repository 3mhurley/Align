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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      monday: {
        type: DataTypes.INTEGER,
      },
      tuesday: {
        type: DataTypes.INTEGER,
      },
      wednesday: {
        type: DataTypes.INTEGER,
      },
      thursday: {
        type: DataTypes.INTEGER,
      },
      friday: {
        type: DataTypes.INTEGER,
      },
      saturday: {
        type: DataTypes.INTEGER,
      },
      sunday: {
        type: DataTypes.INTEGER,
      },
    });
    

    Schedule.associate = function(models) {
      Schedule.belongsTo(models.Calendars, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    Schedule.associate = function(models) {
      Schedule.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Schedule;
  };
  