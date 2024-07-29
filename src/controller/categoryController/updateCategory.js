const { Category } = require("../../models/category");

const updateCategory = async (req, res, next) => {
  try {
    const data = req.body;

    await Category.findByIdAndUpdate({ _id: req?.params?.id }, data);
    return res.status(200).json({
      status: true,
      message: "Category updated successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateCategory;
