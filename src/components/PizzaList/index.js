import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PizzaItem from '../PizzaItem';

const PizzaList = ({ pizzas, onSelectPizza }) => (
  <Col xs={12} lg={8} className="menu-container text-left">
    <Row className="title-container">
      <Col as="h3">Menu</Col>
    </Row>
    <Row className="pizza-size-list">
      {pizzas.map(pizza => (
        <PizzaItem
          key={pizza.name}
          onButtonClick={onSelectPizza.bind(null, pizza)}
          {...pizza}
        />
      ))}
    </Row>
  </Col>
);

export default PizzaList;
