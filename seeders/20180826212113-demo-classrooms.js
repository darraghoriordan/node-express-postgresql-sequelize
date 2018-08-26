'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Classrooms', [{
        class_name: 'Tech 1',
        createdAt:new Date(),
        updatedAt:new Date()
      }, {
        class_name: 'Tech 2',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Classrooms', null, {});
  }
};
