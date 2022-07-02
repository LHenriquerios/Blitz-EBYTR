const { StatusCodes } = require('http-status-codes');

const validateJoi = (schemas) => (req, _res, next) => {
  const { error } = schemas.validate(req.body);

  if (error) next({ status: StatusCodes.BAD_REQUEST, message: error.details[0].message });

  next();
};

module.exports = validateJoi;
