const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  approve:{ type: Boolean, default: false },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: { type: Date, default: Date.now }
});


const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;