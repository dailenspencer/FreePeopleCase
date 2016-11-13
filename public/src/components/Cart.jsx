import React from 'react';
import ReactDOM from 'react-dom';
import * as animationHelpers  from '../helpers/animationHelpers';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}
  
  handleContinueShoppingClick() {
    animationHelpers.hideElement($('#Cart'));
    animationHelpers.undimBackground();
    animationHelpers.addScroll();
  }

  handleCheckoutClick() {
    //TODO : take user to checkout

  }
  
  render() {
    return (
        <div id="Cart">
          <h1 id="CartHeader">Cart</h1>
          <div id="CartItems">
            <h1>Items</h1>
          </div>
          <div id="CartItemsPricing">

          </div>
          <div id="ContinueShopping" onClick={() => this.handleContinueShoppingClick()}>Continue Shopping</div>
          <div id="Checkout" onClick={() => this.handleCheckoutClick()}>Checkout</div>
        </div>

        
    );
  }
}

module.exports = Cart