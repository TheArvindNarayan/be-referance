'use strict';

module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    name: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    endedOn: DataTypes.DATE,
    description: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    priority: DataTypes.STRING,
    autogenerated: DataTypes.BOOLEAN,
    trackIdParent: DataTypes.STRING,
    parentCasePhase: DataTypes.STRING,
    taskType: DataTypes.STRING,
    order: DataTypes.FLOAT
  }, {});
  Tasks.associate = function(models) {
      Tasks.belongsTo(models.ContactProfile, {as: 'worker'});
      Tasks.belongsTo(models.Resource, {as: 'resource'});
      Tasks.belongsToMany(models.ContactProfile, {through: "TasksLinkedCases", as: "linkedCases", foreignKey: "taskId"});
  };
  return Tasks;
};
