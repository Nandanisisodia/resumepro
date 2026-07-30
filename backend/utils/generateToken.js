const jwt = require("jsonwebtoken");

// Keeping token generation in one place makes it easy to change
// expiry or payload structure later without touching controllers.
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

module.exports = generateToken;
