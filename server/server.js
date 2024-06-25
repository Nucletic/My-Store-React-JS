const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const User = require('./models/userModel');
const routes = require('./routes/route');

require("dotenv").config();

mongoose.set('strictQuery', true);

const app = express();

const PORT = process.env.PORT || 5000;

const corsOption = {
  credentials: true,
  origin: "http://localhost:3000",
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect('mongodb://0.0.0.0:27017/shopcart')
  .then(() => {
    console.log('Connected to the Database Successfully');
  });


app.use(async (req, res, next) => {
  if (req.headers['x-access-token']) {
    const accessToken = req.headers['x-access-token'];
    const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
    if (exp < Date.now().valueOf() / 1000) {
      return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" })
    }
    res.locals.loggedInUser = await User.findById(userId);
    next();
  } else {
    next();
  }
});

app.use('/', routes); app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT);
});