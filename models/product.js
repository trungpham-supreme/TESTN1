const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  discount: { type: Schema.Types.ObjectId, ref: "Discount" },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
