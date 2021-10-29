import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col ">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="nav-bar"
          >
            <Navbar.Brand className="nav" to="/">
              <span className="rapid">Rapid</span>
              <span className="crew">Crew</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navigation">
                <Nav.Link as={NavLink} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/services">
                  Services
                </Nav.Link>
                <button>Sign in</button>

                {
                  /* <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>*/
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                }

                {/* {user.email ? (
                    <Nav.Link
                      className="text-white"
                      as={NavLink}
                      to=""
                      onClick={logOut}
                    >
                      <span>{user.displayName}</span> LogOut
                    </Nav.Link>
                  ) : (
                    <Nav.Link as={NavLink} to="/register">
                      LogIn
                    </Nav.Link>
                  )} */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
