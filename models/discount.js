const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  discount: {
    discountType: {
      type: String,
      enum: [
        "4d77694c-fc6d-11ec-b939-0242ac120002", //Percentage reduction
        "517dd8aa-fc6d-11ec-b939-0242ac120002", //Value reduction
      ],
    },
    value: { type: Number },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
});

const Discount = mongoose.model("Discount", DiscountSchema);

module.exports = Discount;
