const { StatusCodes } = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  console.log(err.message);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
};
