import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'
import { getQuestions } from '../apiClient'


class Ollie extends Room {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      questions: ''
    }
    getQuestions().then(result => {
      this.setState({
        questions:
      result.questions.map((question, i) => <p id ='QOTD' key={i}>{question}</p>)  
    })
    this.audio = new Audio("../../sounds/groupClap.mp3")
    this.play = this.play.bind(this)
    })
  }
  name = 'Ollie'
  top = '10vh'
  left = '30vw'

  play(){
    this.setState({
      play: true
    })
    this.audio.play()
  }
  
  render() {
    console.log(this.audio)
    return (
      <div className='room' id="ollieRoom">
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      {this.state.questions && <PopUpBox
      content={<div><h1 id='QOTD-Title'>Question of the day:</h1>{this.state.questions[Math.floor(Math.random() * 19)]}</div>}
      top='5vh'
      left='5vw'
      height='7vh'
      width='25vw'
      />}
      <button onClick={this.play}>Clap</button>
      </div>
    )
  }
}

export default connect()(Ollie)
