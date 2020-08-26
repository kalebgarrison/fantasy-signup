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
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
