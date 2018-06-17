module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn( 'Rooms', 'locationId', {
          type: Sequelize.INTEGER,
          references: {
              model: 'Locations',
              key: 'id'
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn( 'Rooms', 'locationId' );
  }
};
