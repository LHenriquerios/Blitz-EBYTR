const { Task } = require('../database/models');

const getAll = async () => Task.findAll();

const createTask = async (payload) => Task.create(payload);

module.exports = { getAll, createTask };
