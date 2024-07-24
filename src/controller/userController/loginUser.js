const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  try {
    let { phone_or_email, password } = req.body;
    if (!phone_or_email || !password) throw new Error("credential missing");
    const user = await User.findOne({
      $or: [{ phone: phone_or_email }, { email: phone_or_email }],
    });
    if (!admin) throw new Error("credential not present in our DB");

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new Error("password not matched");

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);

    await user.save();
    return res.status(200).json({
      status: true,
      message: "User Login Successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
