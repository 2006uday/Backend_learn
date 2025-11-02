import User from '../models/User.js';
// const User = require('../models/User');

// Signup page (optional, you may want a POST instead)
const signupPage = async (req, res) => {
  res.send('signup page');
};

// Actual signup, saves user to DB
const signup = async (req, res) => {

  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    console.log('username:', name,'\n email:', email,'\n password:', password)
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Signup failed' });
  }
};

// Login page (optional, you may want a POST)
const loginPage = async (req, res) => {
  res.send('login page');
};

const findUser = async (req,res) =>{
    const user = await User.find()
    res.status(200).json({
      message: "user data",
      data: user
    })
}

const login = async (req, res) => {
  // Dummy login logic for demonstration
  res.send('login logic not implemented');
};

export { signupPage, signup, loginPage, login ,findUser};
