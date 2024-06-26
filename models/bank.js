const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bankSchema = new Schema({
  ifsc: {
    type: String,
  },
  bank_id: {
    type: Number,
  },
  branch: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  bank_name: {
    type: String,
  },
});

const Bank = mongoose.model("Bank", bankSchema);
module.exports = Bank;
