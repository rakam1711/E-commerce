const { Product } = require("../../models/product");

const addProduct = async (req, res, next) => {
  try {
    let {
      productName,
      productPrice,
      productRating,
      discount,
      description,
      // catagoryId,
    } = req.body;
    const product = new Product({
      // Catagory: catagoryId,
      productName: productName,
      productPrice: productPrice,
      productRating: productRating,
      discount: discount,
      description: description,
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
