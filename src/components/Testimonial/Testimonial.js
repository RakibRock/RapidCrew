import React from "react";
import { Carousel } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1>Testimonials</h1>
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ height: "700px" }}
                  className="d-block w-100"
                  src="/images/pexels-andrea-piacquadio-716411 (1).jpg"
                  alt="First slide"
                />
                <Carousel.Caption
                  style={{
                    backgroundColor: "#a4de02",
                    color: "black",
                    borderRadius: "7px",
                  }}
                >
                  <h3>Paul Andrew</h3>
                  <p>
                    Rapid Crew is an awasome service provider. They are fast and
                    efficient.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "700px" }}
                  className="d-block w-100"
                  src="/images/pexels-daniel-xavier-1121796 (1).jpg"
                  alt="Second slide"
                />

                <Carousel.Caption
                  style={{
                    backgroundColor: "#a4de02",
                    borderRadius: "7px",
                    color: "black",
                  }}
                >
                  <h3>Peter Pan</h3>
                  <p>They have really nice service packages to choose from.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "700px" }}
                  className="d-block w-100"
                  src="/images/pexels-julian-jagtenberg-103123 (1).jpg"
                  alt="Third slide"
                />

                <Carousel.Caption
                  style={{
                    backgroundColor: "#a4de02",
                    color: "black",
                    borderRadius: "7px",
                  }}
                >
                  <h3>John Mia</h3>
                  <p>They are great at what they do.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
