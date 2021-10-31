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
      <div className="container-fluid bg-color">
        <div className="row pad">
          <div className="col-6 left-text">
            <h1 className="brand-name">
              Rapid<span id="brand-crew">Crew</span>
            </h1>
            <h3 className="brand-name">Fast & Secure</h3>
            <p className="brand-name">
              We are the fastest delivery crew in the country!
            </p>
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

              <a href="#s" className="btn-google" id="learn">
                Learn More
              </a>
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
