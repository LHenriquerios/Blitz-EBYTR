const { Task } = require('../database/models');

const getAll = async () => Task.findAll();

module.exports = { getAll };
