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
    this.setQuestions()
  }

  name = 'Ollie'
  top = '10vh'
  left = '30vw'

  setPopup = () => {
    this.togglePopup()
  }

  play = () => {
    let audio = new Audio("./sounds/groupClap.mp3")
    audio.play()
  }

  setQuestions = () => {
    getQuestions().then(result => {
      this.setState({
        questions: result.questions 
    })
    })
  }
  
  render() {
    return (
      <div className='room' id="ollieRoom">
        <button onClick={() => this.handleClick(0)}>Home</button>
      <div id='ollie-popUp' onClick={() => this.setPopup()}></div>
      {this.state.quoteIsShowing && <QuoteBox />}

      {this.state.questions && this.state.popupIsShowing && <PopUpBox
      content={<div><h1 id='QOTD-Title'>Question of the day:</h1><p id='QOTD'>{this.state.questions[Math.floor(Math.random() * 19)]}</p></div>}
      togglePopup={this.togglePopup}/>}

      <div id='clap-box' onClick={() => this.play()}> </div>
      </div>
    )
  }
}

export default connect()(Ollie)
