import React from "react";
import './Home.css';

const Navbar = () => {
    return (
      <div className="navbar">
        <ul>
          <li className="title"><a className="active"><b>Child</b>
            <b style={{ color: "#00FFFF" }}>Cares </b> </a></li>
          <li>About Us</li>
          <li><a href="/features">Home</a></li>
          <li>Services</li>
          <li><a href="/community">Community</a></li>
          <li className="login"> <a href="/login">Login</a> </li>
          <li className="getStarted"><a href="/getStarted"><b>Get Started</b></a></li>
        </ul>
      </div>
    );
}

export default Navbar;
