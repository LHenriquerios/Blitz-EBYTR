const { StatusCodes } = require('http-status-codes');
const statusServices = require('../services/status');

const getAll = async (_req, res) => {
  const status = await statusServices.getAll();
  return res.status(StatusCodes.OK).json(status);
};

module.exports = { getAll };
