const express = require('express');
const taskRouter = require('./taskRoute');

const router = express.Router();

router.use('/tasks', taskRouter);

module.exports = router;
