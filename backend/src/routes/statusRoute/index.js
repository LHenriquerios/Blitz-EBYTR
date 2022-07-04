const express = require('express');
const rescue = require('express-rescue');
const { getAll } = require('../../controllers/status');

const statusRouter = express.Router();

statusRouter.get('/', rescue(getAll));

module.exports = statusRouter;
