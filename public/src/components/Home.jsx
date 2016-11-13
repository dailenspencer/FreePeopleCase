import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation/Navigation';
import Slider from './Slider';
import ProductsSection from './ProductsSection';
import FooterPopup from './Popups/FooterPopup';
import Cart from './Cart';
import ItemDisplay from './ItemDisplay';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}

  
  
  render() {
    return (
        <div>
          <div id="Home">
            <Navigation/>
            <Cart/>
            <ItemDisplay/>
            <Slider/>
            <ProductsSection collection={"Signature"}/>
            <ProductsSection collection={"Nature"}/>
            <ProductsSection collection={"Art"}/>
          </div>
          <FooterPopup/>
          <div id="Blanket"></div>
        </div>

        
    );
  }
}

module.exports = Home