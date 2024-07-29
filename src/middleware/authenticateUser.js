const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    const data = jwt.verify(token, secretKey);
    const user = await User.findById(data.id);
    if (user) {
      req.user = user;
      req.token = token;
      return next();
    }
    throw new Error("Access forbidden", 403);
  } catch (err) {
    next(err);
  }
};

module.exports = authenticateUser;
