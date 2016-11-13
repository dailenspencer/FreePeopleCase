import React from 'react';
import ReactDOM from 'react-dom';
import {validateEmail} from '../../helpers/backendHelpers';
class FooterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footerPopupHasBeenClosed: false
    };
}
  componentDidMount() {
    let that = this;
    var footerPopupIsHidden = true;
    $(window).scroll(function() {
       that.showFooterPopup(footerPopupIsHidden);
       footerPopupIsHidden = false;
       if($(window).scrollTop() + window.innerHeight == $(document).height()) {
           that.hideFooterPopup();
           footerPopupIsHidden = true;
       }
    });
  }

  showFooterPopup(footerPopupIsHidden) {
    if(this.state.footerPopupHasBeenClosed){
      return;
    }
    if(footerPopupIsHidden) {
       $( "#FooterPopup" ).animate({
        bottom: '0px',
      }, 1000);
    }
  }

  closeFooterPopup() {
    $( "#FooterPopup" ).animate({
      bottom: '-200px',
    }, 1000);
    this.setState({footerPopupHasBeenClosed: true})
  }

  hideFooterPopup() {
    $( "#FooterPopup" ).animate({
      bottom: '-200px',
    }, 1000);
  }

  handleEmailSubmission() {
    if(validateEmail($('#FooterPopupEmailField').val())) {
      //TODO gather email subscriber
      this.closeFooterPopup();
    } else {
      $( "#FooterPopupEmailField" ).css('border-color','#FC745E');
    }
    
  }
  
  render() {
    return (
        <div id="FooterPopup">
          <div id="FooterPopupLeft">
            <h1>Do you love our cases? </h1>
            <p1>Subscribe to our newsletter to receive exclusive discounts on beatiful phone cases</p1>
          </div>
          <div id="FooterPopupRight">
              <input id="FooterPopupEmailField" placeholder="Your Email Address"/>
              <div id="FooterPopupSubscribeButton" onClick={() => this.handleEmailSubmission()}>Subscribe</div>
          </div>
          <div id="CancelButton" onClick={() => this.closeFooterPopup()}>
            <img src="/images/x-button.jpg"/>
          </div>
        </div>

        
    );
  }
}

module.exports = FooterPopup