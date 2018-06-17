module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
      nr: {
          type: DataTypes.STRING,
          allowNull: false
      },
      plz: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      city: {
          type: DataTypes.STRING,
          allowNull: false
      },
      notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
  }, {});

  Location.associate = function(models) {
    Location.hasMany(models.Room);
  };

  return Location;
};