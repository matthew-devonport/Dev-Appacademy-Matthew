import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'


class Kelly extends Room {
  name = 'Kelly'
  top = '40vh'
  left = '20vw'

  popupContent = `
  <h1>You clicked the head!</h1>
  <p>Congratulations!</p>
  `

  render() {
    return (
      <div id='kelly-background'>
        <p>Hello, I am Kelly</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
        <PopUpBox
          content={this.popupContent}
          top='70vh'
          left='32vw'
          height='10vh'
          width='5vw'
        />
      </div>
    )
  }
}

export default connect()(Kelly)