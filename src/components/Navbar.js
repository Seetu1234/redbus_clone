import "./Navbar.css";

import Example from "./dropdown";
function Navbar(){
    return (
        <div className="Navbar">
            <div className="redbus_logo">

            <img src="./images/redbus_logo.png" alt="redbus logos" />
            </div>
            
            <div className="Nav-border"></div>
            {/* Navbar middle section */}

            <div className="Nav-middle">

                <div className="tickets">

                <i className="fa-solid fa-bus fa-xl" id="Tickets" style={{marginTop:"15px"}}></i>
                <a href="#Tickets" >Bus Tickets</a>
                </div>
                <div className="tickets">

                <i class="fa-solid fa-taxi fa-xl" style={{marginTop:"15px"}}></i>
                <a href="#tickets" >Cab Rental</a>
                </div>
                <div className="tickets">

                <i class="fa-solid fa-train-subway fa-xl" style={{marginTop:"15px"}}></i>
                <a href="#tickets" >Train tickets</a>
                </div>
            </div>

            <div className="Nav-last">
                <div className="help">
                    <i class="fa-solid fa-headphones fa-xl" ></i>
                    <a href="#" >Help</a>
                </div>
                <div className="account">
                       <Example></Example>
                </div>
            </div>
        </div>
    );
}

export default Navbar;