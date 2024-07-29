const { Cart } = require("../../models/cart");

const viewCart = async (req, res, next) => {
  try {
    const cart = await Cart.find({ userId: req.user.userId });
    return res.status(200).json({
      status: true,
      message: "Cart listed successfully.",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = viewCart;
