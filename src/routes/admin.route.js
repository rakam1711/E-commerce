const { login } = require("../controller/adminController/auth/login");

const adminRoute = require("express").Router();

adminRoute.post("/login", login);

module.exports = adminRoute;
