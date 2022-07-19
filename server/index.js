const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const customer_model = require("./models/customers");
const transaction_model = require("./models/transactions");
const { parse } = require("dotenv");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://vikasbank:vikasbank@cluster0.a7k0ztb.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
).then(()=>{
  console.log("connection Successfull")
})
.catch((err)=>{   
  console.log("No connection:"+err)
}) 

app.get("/customers", (req, res) => {
  customer_model.find({}, (err, customers) => {
    if (err) {
      res.send(err);
    } else { 
      res.json(customers);
      return;
    }
  }); 
});    
  
app.post("/addTransaction", (req, res) => {
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const amount = req.body.amount;
  const transaction = new transaction_model({
    sender: sender,
    receiver: receiver,
    amount: amount,
  });

  customer_model.findOne({ name: sender }, async (err, customer) => {
    if (err) {
      res.send(err);
    } else {
      if (parseInt(customer.balance) >= parseInt(amount)) {
        customer_model.findOneAndUpdate(
          { name: sender },
          {
            balance: (
              parseFloat(customer.balance) - parseFloat(amount)
            ).toString(),
          },
          async (err) => {
            if (err) {
              res.send(err);
            } else {
              transaction.save((err, transaction) => {
                if (err) {
                  res.send(err);
                } else {
                  res.send(transaction);
                }
              });
            }
          }
        );
      } else {
        res.send("Insufficient Balance");
      }
    }
  });
  customer_model.findOne({ name: sender }, async (err, customerr) => {
    if (err) {
      res.send(err);
    } else {
      if (parseInt(customerr.balance) >= parseInt(amount)) {
        customer_model.findOne({ name: receiver }, async (err, customer) => {
          customer_model.findOneAndUpdate(
            { name: receiver },
            {
              balance: ( 
                parseFloat(customer.balance) + parseFloat(amount)
              ).toString(),
            },
            async (err) => {
              if (err) {
                res.send(err);
              } else {
                transaction.save((err, transaction) => {
                  if (err) {
                    res.send(err);
                  } else {
                    res.send(transaction);
                  }
                });
              }
            }
          );
        });
      } else {
        res.send("Insufficient Balance");
      }
    }
  });
});

app.get("/readTransaction", (req, res) => {
  transaction_model.find({}, (err, transactions) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transactions);
    }
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});
