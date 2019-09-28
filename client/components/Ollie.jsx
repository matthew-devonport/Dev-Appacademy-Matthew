import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import { getQuestions } from '../apiClient'


class Ollie extends Room {
  constructor(props) {
    super(props)
    getQuestions().then(result => {
      this.setState({
        questions: result.questions
      })
    })
  }
  name = 'Ollie'
  top = '10vh'
  left = '30vw'

  popupContent = ``
  
  render() {
    return (
      <div className='room' id="ollieRoom">
        <p>Hello, I am Ollie</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
        {/* <h1>This is where our questions will go!</h1>
        {this.state.questions &&
          this.state.questions.map((question, i) => <p key={i}>{question}</p>)} */}
      </div>
    )
  }
}

export default connect()(Ollie)
