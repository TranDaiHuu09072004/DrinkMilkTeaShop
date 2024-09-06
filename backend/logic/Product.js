const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: { type: String },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  noibat: { type: String, require: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
