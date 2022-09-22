module.exports = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  } else if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    statusCode = 400;
    message = err.errors[0].message;
  } else if (err.name === "SequelizeDatabaseError") {
    statusCode = 404;
    message = "Data Not Found";
  } else if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.msg;
  }
  res.status(statusCode).json({
    message,
  });
};
