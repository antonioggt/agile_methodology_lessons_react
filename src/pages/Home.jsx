import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    productsList: [],
    categoryList: [],
  };

  async componentDidMount() {
    const result = await getCategories();
    this.setState({ categoryList: result });
  }

  render() {
    const { productsList, categoryList } = this.state;
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
        <div>
          {categoryList.map((e) => (
            <button
              key={ e.name }
              type="button"
              data-testid="category"
            >
              { e.name }
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
