import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "../Modal/Modal";
import "./Hero.css";

const Hero = () => {
  const imgStyle = {
    height: "600px",
    width: "auto",
    marginTop: "-5%",
  };

  //modal
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 left-text">
            <h1>RapidCrew</h1>
            <h3>Fast & Secure</h3>
            <p>We are the fastest delivery crew in the country!</p>
            <div>
              <Button className="btn-google" onClick={() => setModalShow(true)}>
                Place Order Now!
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              {/* <button className="btn-google">Place Order Now!</button> */}

              {/* modal */}

              <button className="btn-google" id="learn">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-6 right-img">
            <img
              style={imgStyle}
              className="img-fluid"
              src="images/Free shipping-pana.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
