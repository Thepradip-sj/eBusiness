const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Business = require("../business/business.model");
const User = require("../user/user.model");

const registerBusiness = async (data) => {
  const { businessName, name, email, password } = data;

  // create business
  const business = await Business.create({
    name: businessName,
  });

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create owner user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "owner",
    businessId: business._id,
  });

  // generate JWT token
  const token = jwt.sign(
    {
      userId: user._id,
      businessId: business._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, business, token };
};

module.exports = { registerBusiness };