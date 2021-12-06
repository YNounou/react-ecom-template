import React from "react";
import "./Footer.css";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>React E-commerce Template &copy; Copyright &mdash; {date}</p>
    </div>
  );
}

export default Footer;
