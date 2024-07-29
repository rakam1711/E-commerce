const { Category } = require("../../models/category");

const addCategory = async (req, res, next) => {
  try {
    let { gender, name, description } = req.body;
    const category = new Category({
      gender: gender,
      name: name,
      description: description,
    });

    await category.save();
    return res.status(200).json({
      status: true,
      message: "Category Added successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addCategory;
