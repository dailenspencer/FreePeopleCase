import React from 'react';
import ReactDOM from 'react-dom';
import PhoneCaseEntry from './PhoneCaseEntry';
import {PhoneCases} from '../PhoneCases/PhoneCases.js';

class ProductsHolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }



  createCasesElements() {
    var phoneCaseElements = []
    var that = this
    PhoneCases.filter(function(phoneCase){
      return phoneCase.type === that.props.collection.toLowerCase();
    }).forEach(function(phoneCase, index){
      phoneCaseElements.push(<PhoneCaseEntry key={index} phoneCase={phoneCase}/>)
    })
    return phoneCaseElements;
  }
  
  render() {
    var phoneCaseElements = this.createCasesElements();
    return (
        <div className="ProductsSection" id={this.props.collection}>
          <h1 className="ProductsSectionHeader">{this.props.collection}</h1>
          <div className="ProductsHolder">
            {phoneCaseElements}
          </div>
        </div>

        
    );
  }
}

module.exports = ProductsHolder;