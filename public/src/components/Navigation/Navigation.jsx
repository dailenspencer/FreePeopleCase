import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './MainNav';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}

  
  
  render() {
    return (
        <div id="Navigation">
          <div id="HighBar"></div>
          <MainNav/>
        </div>

        
    );
  }
}

module.exports = Home