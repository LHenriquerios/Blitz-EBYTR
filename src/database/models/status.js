module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      type: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  Status.associate = (models) => {
    Status.hasMany(models.Task, { foreignKey: 'statusId', as: 'tasks' });
  };

  return Status;
};
