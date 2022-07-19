import React from "react";
import "../App.css";

function CustomerCard(props) {
  return (
    <tbody>
      {props.listOfUsers.map((user) => (
        <tr key={user.id}>
          <td>{user.customerId}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.balance}$</td>
        </tr>
      ))}
    </tbody>
  );
}
export default CustomerCard;
