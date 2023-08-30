import React from "react";
import "./Content.css";
function Content() {
  return (
    <div className="Menu-Container">
      <div class="main">
        <ul class="header">
          <li>
            <a class="tag" href="https://www.redbus.in/">
              Home &gt;
            </a>
          </li>
          <li>
            <a class="tag" href="https://www.redbus.in/bushire/">
              &nbsp;&nbsp;&nbsp;Bus Rentals &gt;
            </a>
          </li>
          <li>
            <a class="tag" href="https://www.redbus.in/bus-hire/ahmedabad">
              &nbsp;&nbsp;Ahmedabad
            </a>
          </li>
        </ul>
      </div>

      <div class="heading">
        <div>
          <h1 class="headingOne">Bus Rental in Ahmedabad</h1>
        </div>
        <div>
          <h2 class="headingTwo">Search Buses for Hire in Ahmedabad</h2>
        </div>
        <div class="tel">
          <button>HIRE A VEHICLE</button>
        </div>
        <div class="box">
          <div class="vehicleTypeImage">
            <img
              height="86"
              width="244"
              src="https://www.redbus.in/bus-hire/images/vehicleBus.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
