const express = require('express');
const rescue = require('express-rescue');
const taskController = require('../../controllers/task');
const validateJoi = require('../../middlewares/validateJoi');
const schema = require('../../schemas');

const taskRouter = express.Router();

taskRouter.get('/', rescue(taskController.getAll));
taskRouter.get('/:id', rescue(taskController.getById));
taskRouter.post('/', validateJoi(schema), rescue(taskController.createTask));

module.exports = taskRouter;
