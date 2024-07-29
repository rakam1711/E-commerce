const userRoute = require("express").Router();
const addItemToCart = require("../controller/cartController.js/addItemToCart");
const viewCart = require("../controller/cartController.js/viewCart");
const { login } = require("../controller/userController/loginUser");
const { register } = require("../controller/userController/registerUser");
const authenticateUser = require("../middleware/authenticateUser");

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/add-to-cart", authenticateUser, addItemToCart);
userRoute.get("/view-cart", authenticateUser, viewCart);

module.exports = userRoute;
