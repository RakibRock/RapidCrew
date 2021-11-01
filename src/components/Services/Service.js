import React from "react";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Service = (props) => {
  const { user } = useAuth();

  const { _id, name, description, img } = props.service;
  return (
    <div className="col-md-4 g-5">
      <Card style={{ height: "" }}>
        <Card.Img style={{ height: "350px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/booking/${_id}`}>
            <Button className="btn-google" variant="primary">
              Order {name.toLowerCase()}
            </Button>
          </Link>
          <br />
          {user.email ? (
            <Button className="btn btn-danger" variant="primary">
              Delete
            </Button>
          ) : (
            <p></p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
