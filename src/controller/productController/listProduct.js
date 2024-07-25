const { Product } = require("../../models/product");

const listProduct = async (req, res, next) => {
  try {
    const product = await Product.findById({ _id: req?.params?.id });
    return res.status(200).json({
      status: true,
      message: "Product listed successfully.",
      data: { product },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = listProduct;
