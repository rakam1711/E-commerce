const { login } = require("../controller/adminController/auth/login");
const {
  addProduct,
  updateProduct,
  deleteProduct,
  listProduct,
} = require("../controller/productController");
const {
  addCategory,
  updateCategory,
  deleteCategory,
  listCategory,
} = require("../controller/categoryController");

const adminRoute = require("express").Router();

adminRoute.post("/login", login);
//productRoutes
adminRoute.post("/add-product", addProduct);
adminRoute.get("/list-product/:id", listProduct);
adminRoute.delete("/delete-product/:id", deleteProduct);
adminRoute.put("/update-product/:id", updateProduct);

//categoryRoutes
adminRoute.post("/add-category", addCategory);
adminRoute.get("/list-category/:id", listCategory);
adminRoute.delete("/delete-category/:id", deleteCategory);
adminRoute.put("/update-category/:id", updateCategory);

module.exports = adminRoute;
