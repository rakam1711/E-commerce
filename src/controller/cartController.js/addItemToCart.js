const { Cart } = require("../../models/cart");

const addItemToCart = async (req, res, next) => {
  try {
    let { item } = req.body;
    const userId = req.user._id;
    const totalPrice = 20000;
    const cart = new Cart({
      userId: userId,
      items: item,
      totalPrice: totalPrice,
    });

    await cart.save();
    return res.status(200).json({
      status: true,
      message: "Item Added to cart successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addItemToCart;
