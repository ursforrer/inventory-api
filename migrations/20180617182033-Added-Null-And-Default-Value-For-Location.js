'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.changeColumn( 'Locations', 'street', {
          type: Sequelize.STRING,
          allowNull: false
      });
      queryInterface.changeColumn( 'Locations', 'nr', {
          type: Sequelize.STRING,
          allowNull: false
      });
      queryInterface.changeColumn( 'Locations', 'plz', {
          type: Sequelize.INTEGER,
          allowNull: false
      });
      queryInterface.changeColumn( 'Locations', 'city', {
          type: Sequelize.STRING,
          allowNull: false
      });
      queryInterface.changeColumn( 'Locations', 'notes', {
          type: Sequelize.TEXT,
          allowNull: true
      });
      queryInterface.changeColumn( 'Locations', 'active', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
      });
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.changeColumn( 'Locations', 'street', {
          type: Sequelize.STRING,
          allowNull: true
      });
      queryInterface.changeColumn( 'Locations', 'nr', {
          type: Sequelize.STRING,
          allowNull: true
      });
      queryInterface.changeColumn( 'Locations', 'plz', {
          type: Sequelize.INTEGER,
          allowNull: true
      });
      queryInterface.changeColumn( 'Locations', 'city', {
          type: Sequelize.STRING,
          allowNull: true
      });
      queryInterface.changeColumn( 'Locations', 'notes', {
          type: Sequelize.TEXT,
          allowNull: true
      });
      queryInterface.changeColumn( 'Locations', 'active', {
          type: Sequelize.BOOLEAN,
          allowNull: true
      });
  }
};