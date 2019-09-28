import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'

class Jv extends Room {
  name = 'JV'
  top = "20vh"
  left = "20vw"

  popupContent = `
  <h1>JV's Popup</h1>
  <p>This is a popup for JV</p> 
  ` 
  
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(0)}>Home</button>
        <p>Hello, I am JV</p>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/GdJO2aDWayE'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
        
        {this.state.quoteIsShowing && <QuoteBox />}
        <div>
          <PopUpBox content={this.popupContent} top='30vh' left='30vw' height='5vh' width='5vw' />
        </div>
      </div>
    );
    
  }
}

export default connect()(Jv);
