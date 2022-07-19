import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import TransactionCard from "../components/transactionCard";
import "../transactionPage.css";

function Transaction() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);

  function addTransaction() {
    if (sender === "" || receiver === "" || amount === "") {
      alert("Please fill in all fields");
    } else if (sender === receiver) {
      alert("You can't send money to yourself");
    } else {
      Axios.post("http://localhost:3001/addTransaction", {
        sender: sender,
        receiver: receiver,
        amount: amount,
      });
      window.location.reload(false);
    }
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/readTransaction").then((response) => {
      setListOfTransactions(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/customers").then((response) => {
      setListOfUsers(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <div className="transaction">
      <div className="transactionForm">
        <label>Transaction Form:</label>
        <div className="senderAndReceiver">
          <div className="sender">
            <label>From:</label>
            <select name="sender" onChange={(e) => setSender(e.target.value)}>
              <option value="">Sender:</option>
              {listOfUsers.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="receiver">
            <label>To:</label>
            <select
              name="receiver"
              onChange={(e) => setReceiver(e.target.value)}
            >
              <option value="">Receiver:</option>
              {listOfUsers.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="amount">
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
          <label>$</label>
        </div>
        <button className="submitButton" onClick={addTransaction}>
          Submit
        </button>
      </div>

      <div className="transactionList">
        <label>Customers' Transactions</label>
        <table>
          <thead>
            <tr>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
            </tr>
          </thead>
          <TransactionCard listOfTransactions={listOfTransactions} />
        </table>
      </div>
    </div>
  );
}
export default Transaction;
