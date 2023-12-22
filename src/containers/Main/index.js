import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Row from 'react-bootstrap/Row';

import { ErrorMessage, Loading, PizzaList, Cart, PizzaModal } from '../../components';

import './style.css';

const GET_PIZZA_SIZES = gql`
  {
    pizzaSizes {
      name,
      maxToppings,
      basePrice,
      toppings {
        topping {
          name,
          price
        }
      }
    }
  }
`;

class Main extends Component {
  state = {
    cartItems: [],
    selectedPizza: {},
    selectedToppings: [],
    isModalOpen: false,
  }

  addPizzaToCart = (pizza) => {
    const cartItem = {
      ...pizza,
      toppings: this.state.selectedToppings
    };

    this.setState({
      cartItems: [
        ...this.state.cartItems,
        cartItem,
      ],
    });

    this.closeModal();
  }

  removePizzaFromCart = (index) => {
    this.state.cartItems.splice(index, 1);

    this.setState({ cartItems: [...this.state.cartItems] });
  }

  selectPizzaSize = (pizza) => {
    this.setState({ selectedPizza: { ...pizza } });
    this.openModal();
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({
      selectedToppings: [],
      isModalOpen: false,
    });
  }

  handleToppingChange = (topping, event) => {
    const { name, checked } = event.target;
    const { selectedToppings } = this.state;

    console.log({name, checked, selectedToppings});

    const updatedToppings = checked
      ? selectedToppings.concat([topping])
      : selectedToppings.filter(t => t.name !== topping.name);

    this.setState({ selectedToppings: updatedToppings });

    console.log(this.state.selectedToppings);
  }

  render() {
    const {
      cartItems,
      selectedPizza,
      isModalOpen,
      selectedToppings
    } = this.state;

    return (
      <Query query={GET_PIZZA_SIZES}>
        {({ data, loading, error }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <Loading />;

          const { pizzaSizes } = data;

          return (
            <Row as="main" className="main-container">
              <PizzaList
                pizzas={pizzaSizes}
                onSelectPizza={this.selectPizzaSize}
              />
              <Cart
                items={cartItems}
                onRemoveClick={this.removePizzaFromCart}
              />
              <PizzaModal
                show={isModalOpen}
                actionClick={this.addPizzaToCart}
                selectedPizza={selectedPizza}
                selectedToppings={selectedToppings}
                handleClose={this.closeModal}
                handleToppingChange={this.handleToppingChange}
              />
            </Row>
          );
        }}
      </Query>
    );
  }
}

export default Main;
