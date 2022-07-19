import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import CustomerCard from "../components/customerCard";
import "../customerPage.css";
function Customer() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/customers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className="Customers">
      <h1>Our Customers</h1>

      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>
        <CustomerCard listOfUsers={listOfUsers} />
      </table>
    </div>
  );
}
export default Customer;
