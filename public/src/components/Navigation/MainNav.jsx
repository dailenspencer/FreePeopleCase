import React from 'react';
import ReactDOM from 'react-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
}

  
  
  render() {
    return (
        <div id="MainNav" >
          <div id="MainNavLeft">
            <h1 id="MainNavLeftHeader"> Handcrafted in America </h1>
            <div id="MainNavLeftBottom">
              <h1> Signature </h1>
              <h1> Art </h1>
              <h1> Iconic </h1>
            </div>
          </div>
          <div id="MainNavMiddle">
            <h1>Free People</h1>
            <h2>Phone Cases</h2>
          </div>
          <div id="MainNavRight"> 
            <h1 id="MainNavRightHeader">Designed For Longevity</h1>
            <div id="MainNavRightBottom">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>

        
    );
  }
}

module.exports = MainNav