import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox'


class Jv extends Room {
  render() {
    return (
      <div>
        <p>Hello, I am JV</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        <button onClick={this.toggleQuote}>Quote</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
    )
  }
}

export default connect()(Jv)
