// server/routes/route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

router.post('/signup', userController.signup);

router.post('/login', userController.login);
router.get('/account', userController.authenticate, (req, res) => {
  res.send(req.rootUser);
});
router.get('/searchProduct/:key', productController.searchProducts);

module.exports = router;