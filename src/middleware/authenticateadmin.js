const { Admin } = require("../models/admin");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    const data = jwt.verify(token, secretKey);
    const admin = await Admin.findById(data.id);
    if (admin) {
      req.admin = admin;
      req.token = token;
      return next();
    }
    throw new Error("Access forbidden", 403);
  } catch (err) {
    next(err);
  }
};

module.exports = authenticateAdmin;
