const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  role: { type: Schema.Types.ObjectId, ref: "Role" },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
  readPayment: { type: Boolean, default: false },
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
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
