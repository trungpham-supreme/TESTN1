const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new mongoose.Schema({
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
      '235c6194-ee49-11ec-8ea0-0242ac120002', // merchant
      '2778fa08-ee49-11ec-8ea0-0242ac120002', // audit 
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: { type: Date, default: Date.now }
});


const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;