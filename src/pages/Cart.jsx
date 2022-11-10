import React from 'react';

const MIN_AMOUNT = 1;

class Cart extends React.Component {
  state = {
    cartList: [],
    quantidade: MIN_AMOUNT,
  };

  componentDidMount() {
    const result = JSON.parse(localStorage.getItem('cart-items'));
    this.setState({
      cartList: result,
    });
  }

  render() {
    const { cartList, quantidade } = this.state;
    const noCartList = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
    return (
      <div>
        { !cartList
          ? noCartList
          : (
            <div>
              {cartList.map((e, index) => (
                <div key={ index }>
                  <p data-testid="shopping-cart-product-name">{ e[0].nome }</p>
                  <p>{ e[0].preco }</p>
                  <p
                    data-testid="shopping-cart-product-quantity"
                  >
                    {`Quantidade: ${quantidade}`}
                  </p>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default Cart;
