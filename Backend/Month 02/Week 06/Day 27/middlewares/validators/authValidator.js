const validator = require("validator");

//TODO: Eksport Signup
exports.signup = async (req, res, next) => {
  let errors = [];
  // Check req.body.email is email
  if (!validator.isEmail(req.body.email)) {
    errors.push("Email field must be valid email");
  }
  // Check password strong
  if (!validator.isStrongPassword(req.body.password)) {
    errors.push(
      "Password must have (minimum length 8 characters, minimum 1 lowercase characters, minimum 1 uppercase characters, minimum 1 number, minimum 1 symbol)"
    );
  }
  // Check passwordConfirmation
  if (req.body.confirmPassword !== req.body.password) {
    errors.push("Password confirmation must be same to password");
  }
  // If errors length > 0, it will make errors message
  if (errors.length > 0) {
    // Because bad request
    return res.status(400).json({
      message: errors.join(", "),
    });
  }
  next();
};
