import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import authService from "../services/auth.service";
import eventBus from "../common/EventBus";
import "../Navbar.css";
class OwnerDashboard extends Component {
 constructor(props) {
     super(props);
    this.logOut = this.logOut.bind(this);

     this.state = {
   
      currentUser: undefined,
     };
   }

  componentDidMount() {
    const user = authService.getCurrentUser();

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
     authService.logout();
     this.setState({
   
      currentUser: undefined,
    });
  }

  render() {
    // const { currentUser } = this.state;

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
            </li>  */}

           

           
            
          </div>

          {/* {currentUser ? ( */}
            <div className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                   {currentUser.username} 
                </Link>
              </li> */}
              <li className="nav-item">
              <a href="/ListEmployeeComponent" className="nav-link active" >
                  Employee
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListInventoryReportsComponent" className="nav-link" >
                  InventoryReports
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListRoomComponent" className="nav-link" >
                  Room
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListReservationComponent" className="nav-link" >
                  Reservations
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListSetRatesComponent" className="nav-link" >
                  SetRates
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListGuestComponent" className="nav-link" >
                  Guest
                </a>
              </li>
              <li className="nav-item">
                <a href="/Button" className="nav-link" onClick={this.logOut}>
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
              </li>
            </div> */}
          {/* )} */}
        </nav>
        </div>
    )
          }
        }
        export default OwnerDashboard