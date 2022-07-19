import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/home";
import Customer from "./pages/customer";
import Transaction from "./pages/transaction";

function App() {
  return (
    <Router>
      <nav className="Navbar">
        <div className="logo">
          <h1>The Spark Bank</h1>
        </div>
        <div className="nav_links">
          <Link className="nav_link" to="/">
            {" "}
            Home
          </Link>
          <Link className="nav_link" to="/customer">
            {" "}
            Customer
          </Link>
          <Link className="nav_link" to="/transaction">
            {" "}
            Transaction
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
