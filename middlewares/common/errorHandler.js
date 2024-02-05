const { createError } = require("http-errors");

// 404 not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Page Not Found"));
};

// default error handler
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.render("error", {
    title: "Error Page",
  });
};

module.exports = { notFoundHandler, errorHandler };
