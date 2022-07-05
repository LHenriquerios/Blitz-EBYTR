const express = require('express');
const statusRouter = require('./statusRoute');
const taskRouter = require('./taskRoute');

const router = express.Router();

router.use('/tasks', taskRouter);
router.use('/status', statusRouter);

module.exports = router;
