import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'

class Jv extends Room {
  name = 'JV'
  top = "20vh"
  left = "20vw"

  render() {
    return (
      <div>
        <p>Hello, I am JV</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
        <div>
          <PopUpBox />
        </div>
      </div>
    );
    
  }
}

export default connect()(Jv);
