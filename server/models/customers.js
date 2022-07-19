const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  name: String,
  email: String,
  customerId: String,
  balance: String,
});

const customerModel = mongoose.model("customers", customersSchema);
module.exports = customerModel;
 