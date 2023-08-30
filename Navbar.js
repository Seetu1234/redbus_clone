import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar" style={{ height: "10vh" }}>
      <div className="redbus_logo">
        <img
          src="./images\redbuslogo.png"
          alt="redbus logos"
          width="25%"
          height="50%"
          style={{ margin: "5%", marginLeft: "70%" }}
        />
      </div>

      <div className="Nav-middle">
        <div className="tickets">
          <a href="#Tickets">Bus Tickets</a>
        </div>
        <div className="tickets">
          <a href="#tickets">rYde</a>
        </div>
        <div className="tickets">
          <a href="#tickets">redRail</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
