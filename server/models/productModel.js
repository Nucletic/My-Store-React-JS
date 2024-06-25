const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: {
    type: Number,
    required: true
  }, name: {
    type: String,
    required: true
  }, images: {
    type: [String],
    required: true
  }, productCategory: {
    type: String,
    required: true
  }, price: {
    type: Number,
    required: true
  }, rating: {
    type: Number,
  }, ratingCount: {
    type: Number,
    required: true
  }, reviewCount: {
    type: Number,
  }, review: {
    type: [String],
    required: true
  }, stocks: {
    type: Number,
    required: true
  }, warranty: {
    type: String,
  }, gurranty: {
    type: String,
  }, company: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('products', productSchema);