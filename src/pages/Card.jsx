import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, price, img, productId } = this.props;
    return (
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
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default Card;
