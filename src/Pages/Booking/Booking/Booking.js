import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://possessed-caverns-85625.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <Card style={{ width: "" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={service.img}
              />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 pt-5 left-text mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Name: {user.displayName}</h3>
              <h5>Email: {user.email}</h5>
              <input
                className="mt-1"
                required
                placeholder="Your Address"
                {...register("displayName", { required: true, maxLength: 20 })}
              />
              <input
                placeholder="Your Phone"
                required
                className="mt-1"
                type="number"
                {...register("age", { min: 18, max: 99 })}
              />
              <br />
              {/* submit btn */}
              <input className="btn-google " type="submit" />
              <p>Click to Book</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
