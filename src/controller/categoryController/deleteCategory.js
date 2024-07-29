const { Category } = require("../../models/category");

const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete({ _id: req?.params?.id });
    return res.status(200).json({
      status: true,
      message: "Category Deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCategory;
