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
  top = '18vh'
  left = '18vh'

  setPopup = (e) => {
    console.log(e.target.textContent)
    this.togglePopup(),
    this.popupContent = (
      <React.Fragment>
     <h1>{e.target.textContent}</h1>
     <br/>
      <iframe
          width='900'
          height='525'
          src={e.target.attributes[0].value}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
      <div id='jv-image'>
        <button onClick={() => this.handleClick(0)}>Home</button>
         
        {this.state.quoteIsShowing && <QuoteBox />}
 
   

      </div>
      <div id='jv-box'>
      {this.state.videos && this.state.videos.map((video, i) => <p key={i} onClick={(e) => this.setPopup(e)} value = {video.url}>{video.name}</p>
        )
      }
      
    </div>
    {this.state.popupIsShowing && <PopUpBox
          content={this.popupContent}
          togglePopup={this.togglePopup}
        />}
    </React.Fragment> 
    )
  }
}

export default connect()(Jv);