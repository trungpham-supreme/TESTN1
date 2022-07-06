const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  type : {
    type: String,
    enum: [
      '2114d038-fc63-11ec-b939-0242ac120002', // staff
      '2a5208fa-fc63-11ec-b939-0242ac120002', // company managers
      '2e13802c-fc63-11ec-b939-0242ac120002', // department managers
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: { type: Date, default: Date.now }
});


const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;