const { User } = require("../../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    let { phone, email, password, name } = req.body;
    if (!phone || !email || !password)
      throw new Error("All details are required.");

    const userExists = await User.findOne({
      $or: [{ phone: phone }, { Email: email }],
    });
    if (userExists) throw new Error("user already exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      phone: phone,
      email: email,
      password: hashedPassword,
      name: name,
    });

    await user.save();
    return res.status(200).json({
      status: true,
      message: "Registered successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
