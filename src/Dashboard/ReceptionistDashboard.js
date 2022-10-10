import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import ReceptionistService from "../services/Receptionist.service";
import eventBus from "../common/EventBus";
import "../Navbar.css";

class ReceptionDashboard extends Component {
constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
   
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = ReceptionistService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        
      });
    }
    
    eventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    eventBus.remove("logout");
  }

  logOut() {
    ReceptionistService.logout();
    this.setState({
   
      currentUser: undefined,
    });
  }

  render() {
    //const { currentUser } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Hotel Management System
          </Link>
          <div className="navbar-nav mr-auto">
             {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link> 
            </li> */}
             {/* {currentUser && ( 
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

           {/* {currentUser ? ( */}
            <div className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>  */}
              <li className="nav-item">
              <a href="/RListReservationComponent" className="nav-link active" onClick={this.logOut}>
                  Reservation
                </a>
              </li>
              <li className="nav-item">
                <a href="/RListGuestComponent" className="nav-link" onClick={this.logOut}>
                  Guest
                </a>
              </li>
              <li className="nav-item">
                <a href="/RListRoomComponent" className="nav-link" onClick={this.logOut}>
                  Rooms
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          {/* ) : ( */}
            {/* <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li> */}
            {/* </div> */}
          {/* )} */}
        </nav>
        </div>
    )
          }
        }
        export default ReceptionDashboard