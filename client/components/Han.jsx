import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'



class Han extends Room {

  state = {
    playing: false,
    track: null,
  }
  
  name = 'Han'
  top = '80vh'
  left = '33vw'

  popupTitle = 'Mindfulness'
  popupContent = <p>test</p>

  setAudio = (track) => {
    this.setState({
      playing: true,
      track: track,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id='hanBackground'></div>
        <div className='room' id='hanRoom'>

          <audio controls>
            <source src="#" type="audio/ogg" />
            <source src="#" type="audio/mpeg" />
          </audio>
          <button onClick={() => this.handleClick(0)}>Home</button>
          <div id='mindfulness'>
            <a className='technic button deg270' onClick={this.togglePopup}>
              {/* trigger popup */}
              Mindfulness
            </a>
            <div className='technic button deg0' onClick={() => this.setAudio('track1')}>
              <div className="arrow-right"></div>
              Sounds
            </div>
            <div className='technic button deg135' href='#popup'>
              <div className="arrow-right"></div>
              Body Scan
            </div>
            <div className='technic button deg180' href='#popup'>
              <div className="arrow-right"></div>
              Breath
            </div>
            <div className='technic button deg220' href='#popup'>
              <div className="arrow-right"></div>
              Metta
            </div>
            <div className='technic button deg320' href='#popup'>
              <div className="arrow-right"></div>
              5 Senses
            </div>
            <div className='technic button deg45' href='#popup'>
              <div className="arrow-right"></div>
              R.A.I.N
            </div>

          </div>

          {this.state.popupIsShowing && <PopUpBox title={this.popupTitle} content={this.popupContent} togglePopup={this.togglePopup}/>}
          {/* {this.state.quoteIsShowing && <QuoteBox />} */}
        </div>

      </React.Fragment>
    )
  }
}

export default connect()(Han)