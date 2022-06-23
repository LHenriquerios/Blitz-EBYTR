'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      contents: Sequelize.STRING,
      statusId: {
        type: Sequelize.INTEGER,
        references: {model: 'Status', key: 'id'},
        field: 'status_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at', // a coluna será criada no banco com este nome
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at', // a coluna será criada no banco com este nome
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};
