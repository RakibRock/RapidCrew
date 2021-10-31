import React from "react";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <div className="col-md-4 g-5">
      <Card style={{ width: "" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to="/login">
            <Button className="btn-google" variant="primary">
              Order
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
