import React from "react";

function TransactionCard(props) {
  return (
    <tbody>
      {props.listOfTransactions.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.sender}</td>
          <td>{transaction.receiver}</td>
          <td>{transaction.amount}$</td>
        </tr>
      ))}
    </tbody>
  );
}
export default TransactionCard;
