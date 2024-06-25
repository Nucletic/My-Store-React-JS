const Product = require('../models/productModel');

exports.searchProducts = async (req, res, next) => {
  try {

    let result = await Product.find({
      "$or": [
        {
          name: { $regex: req.params.key }
        }
      ]
    });
    console.log(result[0].name);
    res.send(result);
  } catch (err) {
    next(err);
  }
}