const mongoose = require("mongoose"); // Erase if already required

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must have a name"],
  },
  price: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "parcos", "adidas", "marcos"],
      message: "{VALUE} is not among company name",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
