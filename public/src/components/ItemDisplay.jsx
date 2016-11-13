import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers  from '../helpers/jqueryHelpers';

class ItemDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}
  
  handleContinueShoppingClick() {
    jqueryHelpers.hideElement('#ItemDisplay');
    jqueryHelpers.addScroll();
    jqueryHelpers.undimBackground();
  }

  handleAddItemClick() {
    //TODO : add item to cart and change button to proceed to checkout

  }
  
  render() {
    return (
        <div id="ItemDisplay">
          <h1 id="ItemDisplayHeader"></h1>
          <h1 id="ItemDisplayPricing"></h1>
          <h1 id="ItemDisplayDescription"></h1>
          <div id="ContinueShopping" onClick={() => this.handleContinueShoppingClick()}>Continue Shopping</div>
          <div id="AddToCart" onClick={() => this.handleAddToCartClick()}>Add To Cart</div>
        </div>
    );
  }
}

module.exports = ItemDisplay;