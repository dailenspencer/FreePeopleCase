import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation/Navigation';
import Slider from './Slider';
import ProductsSection from './ProductsSection';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}

  
  
  render() {
    return (
        <div>
          <Navigation/>
          <Slider/>
          <ProductsSection collection={"Signature"}/>
          <ProductsSection collection={"Nature"}/>
          <ProductsSection collection={"Art"}/>
        </div>

        
    );
  }
}

module.exports = Home