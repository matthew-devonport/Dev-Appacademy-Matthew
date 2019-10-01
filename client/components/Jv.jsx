import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox'
import PopUpBox from './PopUpBox'
import { getVideos } from '../apiClient'

class Jv extends Room {
  constructor(props) {
    super(props)
    getVideos().then(result => {
      this.setState({
        videos: result.videos,
        name: result.name
      })
    })
  }

  name = 'JV'
  top = '18vh'
  left = '18vh'

  setPopup = (e, title) => {
    this.togglePopup()
    this.videoSrc = e.target.attributes[0].value
    this.videoTitle = title
  }

  render() {
    console.log("this one's for you JV!  **Thumps chest**")
    console.log('               __________')
    console.log("             .'----------`.")
    console.log('             | .--------. |')
    console.log('             | |########| |       __________')
    console.log('             | |########| |      /__________ ')
    console.log("    .--------| `--------' |------|    --=-- |-------------.")
    console.log("    |        `----,-.-----'      |o ======  |             | ")
    console.log('    |       ______|_|_______     |__________|             | ')
    console.log('    |      /  %%%%%%%%%%%%                               | ')
    console.log('    |     /  %%%%%%%%%%%%%%                              | ')
    console.log('    |     ^^^^^^^^^^^^^^^^^^^^                            | ')
    console.log('    +-----------------------------------------------------+')
    console.log('    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
    return (
      <React.Fragment>
        <div id='jv-image'>
          <button className='homeSpace' onClick={() => this.handleClick(0)}>Home</button>

          {this.state.quoteIsShowing && <QuoteBox />}
        </div>
        <div id='jv-box'>
          {this.state.videos &&
            this.state.videos.map((video, i) => (
              <p
                key={i}
                onClick={e => this.setPopup(e, video.name)}
                value={video.url}
              >
                {video.name}
              </p>
            ))}
        </div>
        <div
          value='https://www.youtube.com/embed/CUC2DuAd2CQ'
          onClick={e => this.setPopup(e, 'It looks like that!')}
          className='glasses'
        ></div>
        {this.state.popupIsShowing && (
          <PopUpBox
            content={
              <React.Fragment>
                <h1>{this.videoTitle}</h1>
                <br />
                <iframe
                  width='560'
                  height='315'
                  src={this.videoSrc}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </React.Fragment>
            }
            togglePopup={this.togglePopup}
          />
        )}
      </React.Fragment>
    )
  }
}

export default connect()(Jv)
