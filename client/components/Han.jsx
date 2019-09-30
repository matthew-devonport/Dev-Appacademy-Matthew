import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'



class Han extends Room {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      track: '',
    }
  }
  
  name = 'Han'
  top = '80vh'
  left = '33vw'

  setPopup = (content) => {
    this.togglePopup(),
    this.popupContent = content
  }

  mindfulness = (
    <React.Fragment>
    <h1>Mindfulness</h1>
    <p>test</p>
    </React.Fragment>
  )

  setAudio = (track) => {
    this.setState({
      playing: true,
      track: track
    })
  }
  
  play = () => {
    let audio = document.querySelector("audio")
    if (audio.canPlayType('audio/mpeg;')) {
      audio.type= 'audio/mpeg';
      audio.src= this.state.track + '.mp3';
      } else {
      audio.type= 'audio/ogg';
      audio.src= this.state.track + '.ogg';
    }
    audio.load()
    audio.play()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.track != prevState.track) {
      this.play()
    }
  }

  render() {
    
    return (
      <React.Fragment>
        <div id='hanBackground'></div>
        <div className='room' id='hanRoom'>
          <button onClick={() => this.handleClick(0)}>Home</button>
          {this.state.playing &&
          <audio controls>
            <source src="" type="" />
          </audio>}
          <div id='mindfulness'>
            <div className='technic deg270' onClick={() => this.setPopup(this.mindfulness)}>
              Mindfulness
            </div>
            <div className='technic deg320' onClick={() => this.setAudio('./sounds/forest')}>
              <div className="arrow-right"></div>
              Sounds
            </div>
            <div className='technic deg0' onClick={() => this.setAudio('./sounds/river')}>
              <div className="arrow-right"></div>
              Body Scan
            </div>
            <div className='technic deg45' href='#popup'>
              <div className="arrow-right"></div>
              Breath
            </div>
            <div className='technic deg90' href='#popup'>
              <div className="arrow-right"></div>
              Here & Now
            </div>
            <div className='technic deg135' href='#popup'>
              <div className="arrow-right"></div>
              R.A.I.N
            </div>
            <div className='technic deg180' href='#popup'>
              <div className="arrow-right"></div>
              5 Senses
            </div>
            <div className='technic deg220' href='#popup'>
              <div className="arrow-right"></div>
              Metta
            </div>
          </div>

          {this.state.popupIsShowing && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}/>}
          {this.state.quoteIsShowing && <QuoteBox />}
        </div>
        
      </React.Fragment>
    
    )
    
  }
}

export default connect()(Han)