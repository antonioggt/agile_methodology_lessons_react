import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { title, price, img } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ img } alt={ title } />
        <h4>{ price }</h4>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
