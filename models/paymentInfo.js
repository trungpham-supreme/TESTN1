const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  customer: { type: String },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  employee: { type: Schema.Types.ObjectId, ref: "Employee" },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  fee: { type: String },
  discount: { type: String },
  payment: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
});

const PaymentInfo = mongoose.model("PaymentInfo", PaymentInfoSchema);

module.exports = PaymentInfo;
