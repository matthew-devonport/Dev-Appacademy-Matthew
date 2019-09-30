import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'



class Kelly extends Room {
  name = 'Kelly'
  top = '1vh'
  left = '120vh'

  popupContent = ''

  content = (
    <div>
      <h1>You clicked the POTATO!</h1>
      <p>Congratulations!</p>
      
    </div>
  )

  setPopup = content => {
    this.togglePopup(), (this.popupContent = content)
  }

  render() {
    return (
      <div id='kelly-background'>
        <p>Hello, I am Kelly</p>
        <button onClick={() => this.handleClick(0)} id='home-button'>
          Home
        </button>

        <a
          href='https://www.codewars.com/'
          target='blank'
          id='codewars-link'
        ></a>

        {this.state.quoteIsShowing && <QuoteBox />}
        <div onClick={() => this.setPopup(this.content)} id='potato-box'></div>

        {this.state.popupIsShowing && (
          <PopUpBox
            content={this.popupContent}
            togglePopup={this.togglePopup}
          />
        )}
      </div>
    )
  }
}

export default connect()(Kelly)