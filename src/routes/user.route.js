const userRoute = require("express").Router();
const { register } = require("../controller/userController/registerUser");

userRoute.post("/register", register);

module.exports = userRoute;
