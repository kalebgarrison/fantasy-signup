import React from "react";
import "./style.css"

const Navbar = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">2020 Fantasy Football Signup</h1>
        </div>
      </div>
      <ul id="links" className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/preview">
            Hype Me Up!
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sad">
            Ruin My Day..
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
