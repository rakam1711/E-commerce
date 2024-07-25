const { Product } = require("../../models/product");

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: req?.params?.id });
    return res.status(200).json({
      status: true,
      message: "Product Deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteProduct;
