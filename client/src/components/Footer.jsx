import React from "react";
import "../App.css";
function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright ⓒ Vikas Chaurasiya{current_year}</p>
    </footer>
  );
}

export default Footer;
