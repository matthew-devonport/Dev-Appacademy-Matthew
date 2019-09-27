import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';


class Kelly extends Room {
  name = 'Kelly'
  top = '40vh'
  left = '20vw'

  popupContent = ``

  render() {
    return (
      <div>
        <p>Hello, I am Kelly</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
    )
  }
}

export default connect()(Kelly)