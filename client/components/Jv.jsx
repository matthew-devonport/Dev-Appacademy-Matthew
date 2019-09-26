import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import QuoteBox from './QuoteBox';

class Jv extends Room {
  name = 'JV'
  top = "20vh"
  left = "20vw"

  printStyle = () => {
    let styles = document.getElementById('quote-box');
    styles.style.top = this.top;
  }

  render() {
    return (
      <div>
        <p>Hello, I am JV</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        <button onClick={this.printStyle}>see style</button>

        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
    );
  }
}

export default connect()(Jv);
