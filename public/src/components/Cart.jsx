import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import * as jqueryHelpers  from '../helpers/jqueryHelpers';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}
  
  handleContinueShoppingClick() {
    jqueryHelpers.hideElement($('#Cart'));
    jqueryHelpers.undimBackground();
    jqueryHelpers.addScroll();
  }

  handleCheckoutClick() {
    //TODO : take user to checkout
    browserHistory.push('/Checkout');
    jqueryHelpers.undimBackground();
    jqueryHelpers.addScroll();
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