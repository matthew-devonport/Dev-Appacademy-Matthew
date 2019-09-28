import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'



class Kelly extends Room {
  name = 'Kelly'
  top = '1vh'
  left = '120vh'

  popupContent = (
    <div>
      <h1>You clicked the POTATO!</h1>
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
          content={this.popupContent}
          top='90vh'
          left='37vh'
          height='10vh'
          width='22vh'
        />
      </div>
    )
  }
}

export default connect()(Kelly)