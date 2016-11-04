import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation/Navigation';
import {PhoneCases} from '../PhoneCases/PhoneCases.js';


class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBackground : 0
    };
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground(index) {
    if(index === PhoneCases.length){
      index = 0;
    }
    
    $('#Slider')
        .css({
        'background-image': PhoneCases[index].photo
    })
    setTimeout(() => this.changeBackground(index + 1), 3000);
  }

  componentDidMount() {
    setTimeout(() => this.changeBackground(1),3000);
  }
  
  render() {
    return (
        <div id="Slider" style={{'backgroundImage':PhoneCases[0].photo}}>
          
        </div>

        
    );
  }
}

module.exports = Slider;