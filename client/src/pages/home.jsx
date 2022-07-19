import React from "react";
import "../App.css";
import "../home.css";
import pic from "../bankimage.jpg";

function Home() {
  const customerRoute = () => {
    window.location.href = "/customer";
  };
  const transactionRoute = () => {
    window.location.href = "/transaction";
  };

  return (
    <div className="homePage">
      <div className="left">
        <h1>Welcome to Bank of Spark</h1>
        <p className="text-center">"Business and life are like a bank account you can't take out more than you put in"</p>

        <div>
          <button className="pagesButton" onClick={customerRoute}>
            Customer
          </button>
          <button className="pagesButton" onClick={transactionRoute}>
            Transaction
          </button>
        </div>
      </div>
      <div className="right">
        <img src={pic} alt="background" />
      </div>
    </div>
  );
}
export default Home;
