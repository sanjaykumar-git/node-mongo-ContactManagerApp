const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      // Extract the token from the "Bearer" scheme
      token = authHeader.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      // Attach user information to the request
      req.user = decoded.user;

      // Call the next middleware
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, token missing");
  }
});

module.exports = validateToken;
 