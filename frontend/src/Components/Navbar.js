import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar Navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Emotion Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
              <Link to="/dashboard" className="nav-link ">
              Dashboard
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link ">
                Emotions
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link ">
                Create Emotion Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link ">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
