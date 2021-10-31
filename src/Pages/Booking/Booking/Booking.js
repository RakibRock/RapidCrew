import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <Card style={{ width: "" }}>
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 pt-5">
            <h1>{user.displayName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
