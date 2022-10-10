import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./FrontPages/Home";


import "./Navbar.css";
class Navbar extends Component {
    render(){
        return(
            <div>
      <nav className="navbar navbar-expand  bg-dark">
        <Link to={"/"} className="navbar-brand">
          Hotel Management System
        </Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
                  <Link to={"/"} className="nav-link active ">
              Home
            </Link>
          </li>
          <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Button"} className="nav-link">
                  Login/Register
                </Link>
              </li> 
            </div>
            </nav>
        
            </div>
        )
    }
}
export default Navbar