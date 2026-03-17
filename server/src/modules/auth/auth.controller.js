const authService = require("./auth.service");

const register = async (req, res) => {
  try {
    const result = await authService.registerBusiness(req.body);

    res.status(201).json({
      message: "Business registered successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { register };