import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row banner">
          <div className="col-md-3 mx-auto">
            <h3>On Time Delivery</h3>
          </div>
          <div className="col-md-3 mx-auto">
            <h3>Secure Delivery</h3>
          </div>
          <div className="col-md-3 mx-auto">
            <h3>Free Shipping</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
