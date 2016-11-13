import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './MainNav';
import * as animationHelpers from '../../helpers/animationHelpers';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}


  handleNavCartClick() {
    animationHelpers.showElement('#Cart');
    animationHelpers.removeScroll();
    animationHelpers.dimBackground();
  }
  
  render() {
    return (
        <div id="Navigation">
          <div id="HighBar">
            <button id="NavCartButton" onClick={() => this.handleNavCartClick()}>
              <img src="/images/shopping-cart.png" id="NavCartButtonImage"/>
              <h1 id="NavCartButtonHeader">Your Cart</h1>
            </button>
          </div>
          <MainNav/>
        </div>

        
    );
  }
}

module.exports = Home