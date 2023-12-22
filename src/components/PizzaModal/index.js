import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './style.css';

const PizzaModal = ({
  show = false,
  actionClick = () => {},
  selectedPizza = {},
  handleClose = () => {},
  selectedToppings = [],
  handleToppingChange= () => {}
}) => {
  const { maxToppings, toppings } = selectedPizza;
  const shouldBeDisabled = maxToppings && selectedToppings.length >= maxToppings;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select your Toppings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {toppings && toppings.map(({ topping }) => (
          <div key={topping.name} className="topping-item">
            <Form.Check
              type="checkbox"
              label={`${topping.name} ($${topping.price})`}
              name={topping.name}
              checked={selectedToppings.includes(topping)}
              onChange={handleToppingChange.bind(null, topping)}
              disabled={shouldBeDisabled && !selectedToppings.includes(topping)}
            />
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button onClick={actionClick.bind(null, selectedPizza)}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PizzaModal;
