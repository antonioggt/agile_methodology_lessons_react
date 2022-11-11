import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icons8-search.svg';
import CartIcon from '../icons8-blackfriday-64.png';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import '../App.css';

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
        <div className="HeaderContent">
          <div className="Header">
            <label htmlFor="query-input">
              <input
                className="inputText"
                type="text"
                name="inputValue"
                onChange={ this.handleChanges }
                data-testid="query-input"
                value={ inputValue }
              />
            </label>
            <button
              className="HeaderHome"
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              <img src={ Icon } alt="Botao de Busca" />
            </button>
          </div>

          <Link
            to="/cart"
            data-testid="shopping-cart-button"
            className="HeaderButton"
          >
            <img src={ CartIcon } alt="Botao do Carrinho" />
          </Link>
        </div>
        { productsList.length === 0
          ? noProduct : productsList.map((product) => (
            <Card
              productId={ product.id }
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
