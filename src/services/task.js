const { StatusCodes } = require('http-status-codes');
const { Task } = require('../database/models');

const getAll = async () => Task.findAll();

const getById = async (id) => {
  const task = await Task.findByPk(id);

  if (!task) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'Task does not exist' };
    throw error;
  }

  return task;
};

const createTask = async (payload) => Task.create(payload);

// const updateTask = async ({ id, contents, status_id }) => {
// };

module.exports = { getAll, getById, createTask };
