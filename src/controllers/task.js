const { StatusCodes } = require('http-status-codes');
const taskServices = require('../services/task');

// não precisa do next por conta do rescue
const getAll = async (_req, res) => {
  const tasks = await taskServices.getAll();
  return res.status(StatusCodes.OK).json(tasks);
};

const createTask = async (req, res) => {
  const tasks = await taskServices.createTask(req.body);
  return res.status(StatusCodes.CREATED).json(tasks);
};

module.exports = { getAll, createTask };
