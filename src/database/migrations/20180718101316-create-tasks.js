'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.DATE
      },
      endedOn: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      summary: {
        type: Sequelize.TEXT
      },
      priority: {
        type: Sequelize.STRING
      },
      autogenerated: {
        type: Sequelize.BOOLEAN
      },
      trackIdParent: {
        type: Sequelize.STRING
      },
      parentCasePhase: {
        type: Sequelize.STRING
      },
      taskType: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};