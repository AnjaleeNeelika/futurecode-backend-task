const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// User registration
const registerUser = async (req, res) => {
  try {
    const { email, password, ...data } = req.body;
    const existingUser = await User.findOne({ email: email });

    // If there is already an aacount for this email
    if (existingUser) {
      return res.status(409).json({
        message:
          "An account with this email already exists. Please log in instead.",
      });
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new account
    const newUser = await User.create({
      email,
      password: hashedPassword,
      ...data,
    });

    console.log("Account created successfully");

    // Successfully created the account
    return res.status(200).json({
      message: "Account created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if both the email and password are provided
    if (!email || !password) {
      return registerUser
        .status(400)
        .json({ message: "Email and password dre required" });
    }

    // Check if the user exists with the given email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPaswordMatch = await bcrypt.compare(password, user.password);

    if (!isPaswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Successful login
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
