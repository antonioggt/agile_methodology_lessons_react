import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductPage extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const results = await getProductById(id);
    this.setState({ product: results });
  }

  handleHistory = () => {
    const { history } = this.props;
    history.push('/cart');
  };

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <div data-testid="product">
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <h4 data-testid="product-detail-price">{ price }</h4>
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.handleHistory }
        >
          Ir para carrinho
        </button>
      </div>
    );
  }
}

ProductPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
