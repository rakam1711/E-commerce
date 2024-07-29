const { Product } = require("../../models/product");

const addProduct = async (req, res, next) => {
  try {
    let {
      productName,
      productPrice,
      productRating,
      discount,
      description,
      quantity,
      categoryId,
    } = req.body;
    const product = new Product({
      Category: categoryId,
      productName: productName,
      productPrice: productPrice,
      productRating: productRating,
      discount: discount,
      description: description,
      quantity: quantity,
    });

    await product.save();
    return res.status(200).json({
      status: true,
      message: "Product Added successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addProduct;
