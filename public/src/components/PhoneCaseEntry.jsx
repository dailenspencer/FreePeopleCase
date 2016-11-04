import React from 'react';
import ReactDOM from 'react-dom';

class PhoneCaseEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }

  handleClick() {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Products',
      eventAction: 'User Clicked Product',
      eventLabel: this.props.phoneCase.name
    });
  }
  
  
  render() {

    return (
        <div className="PhoneCaseEntry">
          <div className="PhoneCaseImage" style={{'backgroundImage':this.props.phoneCase.photo}} onClick={() => this.handleClick()}></div>
          <h1 className="PhoneCaseText">
            {this.props.phoneCase.name}
          </h1>
        </div>

        
    );
  }
}

module.exports = PhoneCaseEntry;