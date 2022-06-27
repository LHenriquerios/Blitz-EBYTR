const express = require('express');
const rescue = require('express-rescue');
const taskController = require('../../controllers/task');

const taskRouter = express.Router();

taskRouter.get('/', rescue(taskController.getAll));
taskRouter.post('/', rescue(taskController.createTask));

module.exports = taskRouter;
