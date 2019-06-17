import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "rgba(37, 37, 37, 1)",
        boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.3)"
      }}
    >
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/campusListing">
              Campuses<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="students">
              Students
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
