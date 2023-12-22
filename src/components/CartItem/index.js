import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './style.css';

const CartItem = ({ name, basePrice, toppings, removeFromCart }) => {
  const toppingsPrice = toppings.reduce((total, topping) => total += topping.price, 0);
  const totalPrice = basePrice + toppingsPrice;

  return (
    <Col xs={12} className="cart-item">
      <Row>
        <Col as="h5" className="item-title">{name} Pizza</Col>
        <Col as="h5" className="item-price text-right">${totalPrice.toFixed(2)}</Col>
      </Row>
      {toppings.length > 0 &&
        <Row as="ul" className="toppings-list">
          {toppings.map(topping => (
            <Col as="li" xs={12} key={topping.name} className="topping-item">
              {topping.name}
            </Col>
          ))}
        </Row>
      }
      <Button className="remove-item-btn" variant="link" onClick={removeFromCart}>Remove</Button>
    </Col>
  );
}

export default CartItem;
