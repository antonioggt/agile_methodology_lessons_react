import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    productsList: [],
  };

  render() {
    const { productsList } = this.state;
    const noProduct = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    return (
      <div className="Home">
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        { productsList.length === 0
          ? noProduct : productsList.map((product) => product) }
      </div>
    );
  }
}

export default Home;
