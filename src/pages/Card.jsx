import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CART_ITEMS = 'cart-items';

class Card extends Component {
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem(CART_ITEMS))) {
      localStorage.setItem(CART_ITEMS, JSON.stringify([]));
    }
  }

  readItems = () => JSON.parse(localStorage.getItem(CART_ITEMS));

  saveItems = (setCartItems) => localStorage
    .setItem(CART_ITEMS, JSON.stringify(setCartItems));

  addItem = (item) => {
    if (item) {
      const setCartItems = this.readItems();
      this.saveItems([...setCartItems, item]);
    }
  };

  handleClick = () => {
    const { title, price, productId } = this.props;
    const eachItem = [{
      nome: title,
      preco: price,
      id: productId,
    }];
    this.addItem(eachItem);
  };

  render() {
    const { title, price, img, productId } = this.props;
    return (
      <>
        <Link
          to={ `/product/${productId}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h3>{ title }</h3>
            <img src={ img } alt={ title } />
            <h4>{ price }</h4>
          </div>
        </Link>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.handleClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default Card;
