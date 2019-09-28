import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'
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

  // questions = this.state.questions &&
  //         this.state.questions.map((question, i) => <p key={i}>{question}</p>)

  popupContent = (
    <div>
      <h1>Question of the day!</h1>
      <h1>This is where our questions will go!</h1>
      {console.log(this.state.questions)}
    </div>
  )
  
  render() {
    return (
      <div className='room' id="ollieRoom">
        <p>Hello, I am Ollie</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      <PopUpBox
      content={this.popupContent}
      top='5vh'
      left='5vw'
      height='5vh'
      width='20vw'
      />
      </div>
    )
  }
}

export default connect()(Ollie)
