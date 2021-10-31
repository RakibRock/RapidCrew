import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container-fluid abt-clr p-5 mt-5">
        <div className="row">
          <div className="col-md-6 pt-5">
            <div className="about ">
              <h1>About Us</h1>
              <p>We are the fastest courier delivery service in Bangladesh.</p>
            </div>
          </div>
          <div className="col-md-6 image img-fluid pt-5">
            <img src="/images/In no time-amico.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
