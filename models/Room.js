module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
      name: {
          type : DataTypes.STRING,
          notNull: false
      },
    notes: {
      type : DataTypes.TEXT,
    },
    active: {
      type: DataTypes.BOOLEAN,
        notNull: false,
      defaultValue: true
    },
      locationId: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(models.Location);
  };
  return Room;
};