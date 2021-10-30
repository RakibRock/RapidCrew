import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>What We Do</h6>
            <h2>Our Services</h2>
            {services.map((service) => (
              <Service></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
