import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Card_component = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../../../public/Logo3.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Card_component;
