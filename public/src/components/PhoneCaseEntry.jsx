import React from 'react';
import ReactDOM from 'react-dom';

class PhoneCaseEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  
  
  render() {

    return (
        <div className="PhoneCaseEntry">
          <div className="PhoneCaseImage" style={{'backgroundImage':this.props.phoneCase.photo}}></div>
          <h1 className="PhoneCaseText">
            {this.props.phoneCase.name}
          </h1>
        </div>

        
    );
  }
}

module.exports = PhoneCaseEntry;