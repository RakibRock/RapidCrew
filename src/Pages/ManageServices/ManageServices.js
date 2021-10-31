import React, { useEffect, useState } from "react";
import Service from "../../components/Services/Service";

const ManageServices = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("https://possessed-caverns-85625.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>Manage Services</h1>
      {/* {services.map((service) => (
        <div key={service._id}>
          <h1>{service.displayName}</h1>
        </div>
      ))} */}
    </div>
  );
};

export default ManageServices;
