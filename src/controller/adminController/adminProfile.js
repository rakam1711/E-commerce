const { Admin } = require("../../models/admin");

const adminProfile = async (req, res, next) => {
  const adminPubField = [
    "profile_image",
    "phone",
    "email",
    "name",
    "profile_img",
    "status",
  ];

  try {
    const profileData = await Admin.findById(req.admin._id).select(
      adminPubField
    );
    return res.status(200).json({
      status: true,
      message: "Profile fetched successfully.",
      data: { profileData },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = adminProfile;
