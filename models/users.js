module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
    
    Users.associate = function(models) {
      Users.hasMany(models.Schedule, {
        onDelete: "cascade"
      });
    };


    return Users;
  };
  