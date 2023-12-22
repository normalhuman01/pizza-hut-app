import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CartItem } from '..';

import './style.css';

const Cart = ({ items, onRemoveClick }) => {
  const itemsLength = items.length;
  const subtotal = items.reduce((total, item) => {
    total += item.basePrice;
    total += item.toppings.reduce((accum, topping) => accum += topping.price, 0);

    return total;
  }, 0);

  return (
    <Col xs={12} lg={4} className="cart-container text-left">
      <Row className="title-container">
        <Col as="h3">Cart</Col>
      </Row>
      <Row className="cart-items-list">
        {items.map((item, index) => (
          <CartItem
            key={index}
            removeFromCart={onRemoveClick.bind(null, index)}
            {...item}
          />
        ))}
      </Row>
      <Row className="subtotal-container">
        <Col as="h5">Subtotal ({itemsLength} item(s))</Col>
        <Col as="h5" className="text-right">${subtotal.toFixed(2)}</Col>
      </Row>
    </Col>
  );
};

export default Cart;
