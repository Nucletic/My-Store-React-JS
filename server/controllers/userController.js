const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function hashPassword(password) {
  return await bcrypt.hash(password, 12);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.signup = async (req, res, next) => {
  try {
    const { email, username, phone, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = User({ email, username, phone, password: hashedPassword, role: 'basic' });
    const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    newUser.accessToken = accessToken;
    await newUser.save();
    res.json({
      data: newUser,
      accessToken
    });
    console.log('User Created!')
  } catch (error) {
    next(error)
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(new Error('Email does not exist'));
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) return next(new Error('Password is not correct'))
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });
    const coki = res.cookie("refreshToken", accessToken, {
      path: "/",
      sameSite: "strict",
      httpOnly: true,
      secure: true,
    });
    await User.findByIdAndUpdate(user._id, { accessToken })
    res.status(200).json({
      data: { email: user.email, role: user.role },
      accessToken
    })
  } catch (error) {
    next(error);
  }
}

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    const rootUser = await User.findOne({ _id: verifyToken.userId, 'accessToken': token });
    if (!rootUser) { throw new Error('User does not exist.'); }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser;
    next();
  } catch (err) {
    res.status(401).send('unauthorized: No token provided')
    console.log(err);
  }
}
