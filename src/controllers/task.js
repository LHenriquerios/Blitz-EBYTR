const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const taskServices = require('../services/task');

// não precisa do next por conta do rescue
const getAll = async (_req, res) => {
  const tasks = await taskServices.getAll();
  return res.status(StatusCodes.OK).json(tasks);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await taskServices.getById(id);
  return res.status(StatusCodes.OK).json(task);
};

const createTask = async (req, res) => {
  const tasks = await taskServices.createTask(req.body);
  return res.status(StatusCodes.CREATED).json(tasks);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  req.body = { id, ...req.body };
  const task = await taskServices.updateTask(req.body);
  return res.status(StatusCodes.OK).json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await taskServices.deleteTask(id);
  return res.status(StatusCodes.GONE).json({ message: ReasonPhrases.GONE });
};

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
};
