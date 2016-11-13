import React from 'react';
import ReactDOM from 'react-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  
  handleClick(location) {
    switch(location) {
      case 'Signature':
        $('html,body').animate({
          scrollTop: $("#Signature").offset().top
        },1200);
        break;
      case 'Nature': 
        $('html,body').animate({
          scrollTop: $("#Nature").offset().top
        },1200);
        break;
      case 'Art':
        $('html,body').animate({
          scrollTop: $("#Art").offset().top
        },1200);
        break;
      default:
        break;
    }
  }
  
  
  render() {
    return (
        <div id="MainNav" >
          <div id="MainNavLeft">
            <h1 id="MainNavLeftHeader"> Handcrafted in America </h1>
            <div id="MainNavLeftBottom">
              <h1 onClick={() => this.handleClick('Signature')}> Signature </h1>
              <h1 onClick={() => this.handleClick('Nature')}> Nature </h1>
              <h1 onClick={() => this.handleClick('Art')}> Art </h1>
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