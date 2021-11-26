import React from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col ">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg=""
            variant="light"
            className="nav-bar"
          >
            <Navbar.Brand className="nav" to="/">
              <span className="rapid">Rapid</span>
              <span className="crew">Crew</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navigation">
                <Nav className="navigate">
                  <Nav.Link as={NavLink} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/services">
                    Services
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} to="/ourProcess">
                  Our Process
                </Nav.Link> */}

                  {user.email && (
                    <Nav.Link className="" as={NavLink} to="/myOrders">
                      My Orders
                    </Nav.Link>
                  )}

                  {user.email && (
                    <Nav.Link className="" as={NavLink} to="/addService">
                      Add Service
                    </Nav.Link>
                  )}

                  {user.email && (
                    <Nav.Link className="" as={NavLink} to="/manageServices">
                      Manage Orders
                    </Nav.Link>
                  )}

                  {user.email && (
                    <Nav.Link className="" as={NavLink} to="/orderReview">
                      Order Review
                    </Nav.Link>
                  )}
                </Nav>
                {user.email ? (
                  <Nav.Link className="" as={NavLink} to="" onClick={logOut}>
                    <span className="text">{user.displayName}</span> Log Out
                  </Nav.Link>
                ) : (
                  <button className="btn-google " onClick={handleGoogleSignin}>
                    Google Sign In
                  </button>
                )}{" "}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
