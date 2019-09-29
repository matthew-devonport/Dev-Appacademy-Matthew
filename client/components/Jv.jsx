import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import QuoteBox from './QuoteBox';
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
  top = '20vh'
  left = '20vw'

  popupContent = (
    <div>
      <h1>JV's Popup!</h1>
      <p>This is a popup for JV!</p>
    </div>
  )

  render() {
    return (
      <React.Fragment>
        <div id='jv-image'>
          <button onClick={() => this.handleClick(0)}>Home</button>
          <p>Hello, I am JV</p>
          {/* <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/GdJO2aDWayE'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe> */}
          {this.state.quoteIsShowing && <QuoteBox />}

          <PopUpBox
            content={this.popupContent}
            top='30vh'
            left='30vw'
            height='5vh'
            width='5vw'
          />
        </div>
        <div id='jv-box'>
          {this.state.videos && <ul>
            {this.state.videos.map((video, i) => <li key={i}>
              <a href={video.url} target='blank'>{video.name}</a>
            </li>)}
          </ul>}
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Jv);
