import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import ManagerService from "../services/Manager.Service";
import eventBus from "../common/EventBus"
import "../Navbar.css";
class ManagerDashboard extends Component {
constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
   
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = ManagerService.getCurrentUser();

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
    ManagerService.logout();
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
            Hostel Management System
          </Link>
          
            <div className="navbar-nav mr-auto">  
            {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> */}

           </div>

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div> */}

          {/* {currentUser ? ( */}
            <div className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li> */}
               <li className="nav-item">
              <a href="/MListEmployeeComponent" className="nav-link active" >
                  Employee
                </a>
              </li>
              <li className="nav-item">
                <a href="/MListInventoryReportsComponent" className="nav-link" >
                  InventoryReports
                </a>
              </li>
              <li className="nav-item">
                <a href="/MListRoomComponents" className="nav-link" >
                  Rooms
                </a>
              </li>
              <li className="nav-item">
                <a href="/MListReservationComponent" className="nav-link" >
                  Reservation
                </a>
              </li>
              
              {/* <li className="nav-item">
                <a href="/*" className="nav-link">
                  Payment
                </a>
              </li> */}
              <li className="nav-item">
                <a href="/Button" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          {/* ) : (
            <div className="navbar-nav ml-auto">
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
            </div>
          )} */}
        </nav>
        </div>
        
    )
          }
        }
        export default ManagerDashboard