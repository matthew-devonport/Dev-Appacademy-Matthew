import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';


class Ollie extends Room {
  name = 'Ollie'
  top = '20vh'
  left = '20vw'
  render() {
    return (
      <div>
        <p>Hello, I am Ollie</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
    );
  }
}

export default connect()(Ollie)
