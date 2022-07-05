const { Status } = require('../database/models');

const getAll = async () => Status.findAll();

module.exports = { getAll };
