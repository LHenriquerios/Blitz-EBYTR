module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Status', [{
      id: 1,
      type: 'editável',
    },
    {
      id: 2,
      type: 'pendente',
    },
    {
      id: 3,
      type: 'em andamento',
    },
    {
      id: 4,
      type: 'pronto',
    }], { timestemps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Status', null, {});
  },
};
