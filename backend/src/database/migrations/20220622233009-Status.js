module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Status', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
      },
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Status');
  },
};
