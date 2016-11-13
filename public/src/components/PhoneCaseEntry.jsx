import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers  from '../helpers/jqueryHelpers';

class PhoneCaseEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }

  handleProductClick() {
    jqueryHelpers.showElement($('#ItemDisplay'));
    jqueryHelpers.dimBackground();
    jqueryHelpers.populateItemDisplayData(this.props.phoneCase);
    /*
    Send product to google analytics
    ga('send', {
      hitType: 'event',
      eventCategory: 'Products',
      eventAction: 'User Clicked Product',
      eventLabel: this.props.phoneCase.name
    });
    */
  }
  
  render() {

    return (
        <div className="PhoneCaseEntry" onClick={() => this.handleProductClick()}>
          <div className="PhoneCaseImage" style={{'backgroundImage':this.props.phoneCase.photo}}></div>
          <h1 className="PhoneCaseText">
            {this.props.phoneCase.name}
          </h1>
        </div>

        
    );
  }
}

module.exports = PhoneCaseEntry;