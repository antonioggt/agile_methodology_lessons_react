import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

class Home extends React.Component {
  state = {
    productsList: [],
    categoryList: [],
    inputValue: '',
    noProductFound: false,
  };

  async componentDidMount() {
    const result = await getCategories();
    this.setState({ categoryList: result });
  }

  handleChanges = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { inputValue } = this.state;
    const result = await getProductsFromCategoryAndQuery(inputValue, inputValue);

    this.setState({
      productsList: result.results,
      noProductFound: true,
    });
  };

  handleClickForCategory = async (id) => {
    const result = await getProductsFromCategoryAndQuery(id);

    this.setState({
      productsList: result.results,
      noProductFound: true,
    });
  };

  render() {
    const { productsList, categoryList, inputValue, noProductFound } = this.state;
    const noProduct = (
      <p data-testid="home-initial-message">
        { noProductFound
          ? 'Nenhum produto foi encontrado'
          : 'Digite algum termo de pesquisa ou escolha uma categoria.' }
      </p>
    );
    return (
      <div className="Home">
        <div>
          <label htmlFor="query-input">
            <input
              type="text"
              name="inputValue"
              onChange={ this.handleChanges }
              data-testid="query-input"
              value={ inputValue }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </div>

        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        { productsList.length === 0
          ? noProduct : productsList.map((product) => (
            <Card
              key={ product.id }
              title={ product.title }
              price={ product.price }
              img={ product.thumbnail }
            />
          )) }
        <div>
          {categoryList.map((e) => (
            <button
              key={ e.name }
              type="button"
              data-testid="category"
              onClick={ () => this.handleClickForCategory(e.id) }
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
