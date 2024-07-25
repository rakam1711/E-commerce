const { Category } = require("../../models/catagory");

const listCategory = async (req, res, next) => {
  try {
    const category = await Category.findById({ _id: req?.params?.id });
    return res.status(200).json({
      status: true,
      message: "Category listed successfully.",
      data: { category },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = listCategory;
