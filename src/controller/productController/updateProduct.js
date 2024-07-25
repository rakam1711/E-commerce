const { Product } = require("../../models/product");

const updateProduct = async (req, res, next) => {
  try {
    const data = req.body;

    await Product.findByIdAndUpdate({ _id: req?.params?.id }, data);
    return res.status(200).json({
      status: true,
      message: "Product updated successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProduct;
