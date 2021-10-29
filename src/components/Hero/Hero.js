import React from "react";
import "./Hero.css";

const Hero = () => {
  const imgStyle = {
    height: "600px",
    width: "auto",
    marginTop: "-5%",
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 left-text">
            <h1>RapidCrew</h1>
            <h3>Fast & Secure</h3>
            <p>We are the fastest delivery crew in the country!</p>
            <div>
              <button>Place Order Now!</button>
              <button id="learn">Learn More</button>
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
