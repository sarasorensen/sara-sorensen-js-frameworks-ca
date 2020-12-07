import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomeContent = (props, id) => {
  const { item } = props;

  return (
    <Card>
      <Card.Img variant="top" src={item.background_image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <p>{item.rating}</p>
        <p>{item.released}</p>
        <Link to={"gamedetails/" + id}>
          <Button>See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomeContent;
