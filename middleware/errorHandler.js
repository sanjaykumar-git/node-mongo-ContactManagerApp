const {
  VALIDATION_ERROR,
  SERVER_ERROR,
  SUCCESS,
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
  CREATED,
} = require("../constants/constants");

const errorHandler = (err, req, res, next) => {
  // Set the status code to the response's current status or default to SERVER_ERROR (500)
  const statusCode = res.statusCode !== SUCCESS ? res.statusCode : SERVER_ERROR;

  // Define the response message and stack trace based on the type of error
  switch (err.name) {
    case "ValidationError":
      // Handle validation errors
      res.status(VALIDATION_ERROR).json({
        message: "Validation failed. Please check your input.",
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
      });
      break;

    case "NotFoundError":
      // Handle resource not found errors
      res.status(NOT_FOUND).json({
        message: "Resource not found.",
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
      });
      break;

    case "UnauthorizedError":
      // Handle unauthorized access
      res.status(UNAUTHORIZED).json({
        message: "Unauthorized access.",
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
      });
      break;

    case "ForbiddenError":
      // Handle forbidden errors
      res.status(FORBIDDEN).json({
        message:
          "Forbidden: You don't have permission to access this resource.",
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
      });
      break;

    default:
      // Handle general or unexpected errors
      res.status(statusCode).json({
        message: err.message || "An unexpected error occurred.",
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
