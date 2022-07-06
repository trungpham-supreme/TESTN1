const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuggestProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
  suggest: {
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
  },
  hasApproved:{ type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
});


const SuggestProduct = mongoose.model("SuggestProduct", SuggestProductSchema);

module.exports = SuggestProduct;