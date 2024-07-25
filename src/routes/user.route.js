const userRoute = require("express").Router();
const { login } = require("../controller/userController/loginUser");
const { register } = require("../controller/userController/registerUser");

userRoute.post("/register", register);
userRoute.post("/login", login);

module.exports = userRoute;
