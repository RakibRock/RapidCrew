import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-color">
        <div className="row mt-5">
          <div className="col-md-4 p-5 left-text">
            <h2>
              <span id="brand-name">Rapid</span>
              <span id="brand-crew">Crew</span>
            </h2>
            <h5 id="">The Fastest Courier Service in Bnagladesh</h5>
            <p>"We deliver with prevision, care and swiftly."</p>
          </div>
          <div className="col-md-4 p-5  text-center">
            <ListGroup as="ul">
              <Link to="/home" id="brand-food">
                Home
              </Link>
              <Link to="/ourProcess" id="brand-food">
                Our Process
              </Link>
              <Link to="/services" id="brand-food">
                Services
              </Link>
            </ListGroup>
          </div>
          <div className="col-md-4 p-5">
            <h6 id="brand-food">email: rapidcrew@gmail.com</h6>
            <h6 id="brand-food">phone: 125438462833</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Copyright @ Md Rakib Rahman - Programming Hero</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
