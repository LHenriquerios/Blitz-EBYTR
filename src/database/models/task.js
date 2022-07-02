module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      contents: DataTypes.STRING,
      statusId: { type: DataTypes.INTEGER, foreignKey: true },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      underscored: true,
      tableName: 'Tasks',
    },
  );

  Task.associate = (models) => {
    Task.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
  };

  return Task;
};
