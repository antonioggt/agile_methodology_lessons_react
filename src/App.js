import React from 'react';
import './App.css';

class App extends React.Component {
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
      <div className="App">
        { productsList.length === 0
          ? noProduct : productsList.map((product) => product) }
      </div>
    );
  }
}

export default App;
