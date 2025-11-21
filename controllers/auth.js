const authRouter = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  console.log(req.body, "request.body");
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      throw new Error("Already have an account")
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Remove password before sending response
    const { password, ...others } = newUser._doc;

    // Create JWT token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    return res.status(201).json({ user: others, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
   try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
          throw new Error("Invalid Credentials")
    }

    const comparePass = await bcrypt.compare(req.body.password,user.password)
    if(!comparePass){
       throw new Error("Invalid Credentials")
    } 

    // Remove password before sending response
    const { password, ...others } = user._doc;

    // Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    return res.status(201).json({ user: others, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = authRouter;
