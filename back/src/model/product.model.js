const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  porductImg: {
    type: String,
  },
  productName: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    default : 1
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Prodcut", productSchema);
module.exports = Product;
