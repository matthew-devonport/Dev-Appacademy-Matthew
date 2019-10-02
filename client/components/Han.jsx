import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'

import Mindfulness from './Mindfulness'
import Winnie from './Winnie'

class Han extends Room {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      track: '',
      popupTopic: '',
    }
  }

  name = 'Han'
  top = '80vh'
  left = '33vw'

  setPopup = (topic) => {
    this.togglePopup(),
      this.setState({
        popupTopic: topic
      })
  }

  setPopupContent = () => {
    switch (this.state.popupTopic) {
      case 'mindfulness':
        return <Mindfulness />;
      case 'winnie':
        return <Winnie />
      default:
        return undefined;
    }
  }

  setAudio = (track) => {
    this.setState({
      playing: true,
      track: track
    })
  }

  play = () => {
    let audio = document.querySelector("audio")
    if (audio.canPlayType('audio/mpeg;')) {
      audio.type = 'audio/mpeg';
      audio.src = this.state.track + '.mp3';
    } else {
      audio.type = 'audio/ogg';
      audio.src = this.state.track + '.ogg';
    }
    audio.load()
    audio.play()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.track != prevState.track) {
      this.play()
    }
  }

  render() {
    let popupContent = this.setPopupContent();

    return (
      <React.Fragment>
        <div id='hanBackground'></div>
        <div className='room' id='hanRoom'>
          <div className='homeSpace' onClick={() => this.handleClick(0)}>Home</div>
          {this.state.playing &&
            <audio controls>
              <source src="" type="" />
            </audio>}
          <div id='mindfulness'>
            <div className='technic deg270' onClick={() => this.setPopup("mindfulness")}>
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
            <div className='technic deg45'>
              <div className="arrow-right"></div>
              Breath
            </div>
            <div className='technic deg90' onClick={() => this.setAudio('./sounds/mindfulness')}>
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
          <div id='winnie' onClick={() => this.setPopup("winnie")}></div>

          {this.state.quoteIsShowing && <QuoteBox />}
          {this.state.popupIsShowing && <PopUpBox content={popupContent} togglePopup={this.togglePopup} />}
          
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Han)