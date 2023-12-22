import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { PIZZA_IMG_URLS } from '../../utils/constants';

import './style.css';

const PizzaItem = ({ name, basePrice, maxToppings, onButtonClick }) => (
  <Col xs={12} md={4} className="pizza-size-item">
    <Card>
      <Card.Img variant="top" src={PIZZA_IMG_URLS[name]} alt="Pizza" />
      <Card.Body className="text-left">
        <Card.Title as="h5">{name} Pizza</Card.Title>
        <Card.Text>
          Base Price: ${basePrice} <br />
          Max Toppings: {maxToppings ? maxToppings : 'Unlimited'}
        </Card.Text>
        <Button className="select-pizza-btn" onClick={onButtonClick}>Select</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default PizzaItem;
