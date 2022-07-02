module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      id: 1,
      contents: 'Criar uma tela inicial',
      status_id: 2,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      contents: 'Criar os testes da tela inicial',
      status_id: 1,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 3,
      contents: 'Criar o css da tela inicial',
      status_id: 3,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
