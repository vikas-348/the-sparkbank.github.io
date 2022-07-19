const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  amount: String,
});

const transactionModel = mongoose.model("transactions", transactionsSchema);

module.exports = transactionModel; 
 