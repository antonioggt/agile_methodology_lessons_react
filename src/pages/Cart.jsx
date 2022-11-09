import React from 'react';

class Cart extends React.Component {
  state = {
    cartList: [],
  };

  render() {
    const { cartList } = this.state;
    const noCartList = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
    return (
      <div>
        { cartList.length === 0
          ? noCartList : <p>texto</p> }
      </div>
    );
  }
}

export default Cart;
