import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';


class Sarrah extends Room {
  name = 'Sarrah'
  top = '20vh'
  left = '20vw'
  render() {
    return (
      <div>
        <p>Hello, I am Sarrah</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
    );
  }
}

export default connect()(Sarrah)