import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'
import Test from './Test'


class Kelly extends Room {
  name = 'Kelly'
  top = '8vh'
  left = '58vw'

  popupContent1 = (
    <div>
      <h1>You clicked the head!</h1>
      <p>Congratulations!</p>
    </div>
  )

  popupContent2 = (
    <div>
      <h1>You clicked the second head!</h1>
      <p>Congratulations!</p>
    </div>
  )

  render() {
    return (
      <div id='kelly-background'>
        <p>Hello, I am Kelly</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
        <PopUpBox
          content={this.popupContent1}
          top='70vh'
          left='32vw'
          height='10vh'
          width='5vw'
        />
        <PopUpBox
          content={this.popupContent2}
          top='40vh'
          left='32vw'
          height='10vh'
          width='5vw'
        />
      </div>
    )
  }
}

export default connect()(Kelly)