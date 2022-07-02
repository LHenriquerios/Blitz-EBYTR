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

const updateTask = async ({ id, contents, statusId }) => {
  await getById(id);
  await Task.update({ contents, statusId }, { where: { id } });
  return getById(id);
};

const deleteTask = async (id) => {
  const isDeleted = await Task.destroy({ where: { id } }); // retorna 1 se deletou e 0 se não

  if (!isDeleted) {
    const error = { status: StatusCodes.GONE, message: 'Task not deleted' };
    throw error;
  }

  return true;
};

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
};
