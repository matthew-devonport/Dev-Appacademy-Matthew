import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import PopUpBox from './PopUpBox'


class MainRoom extends Room {
  name = `MainRoom`

  setPopup = (content) => {
    this.togglePopup(),
    this.popupContent = content
  }
  
  play = () => {
    let audio = new Audio("./sounds/Gong.mp3")
    audio.play()
  }

  render() {
    return (
      <div id='content'>
          <div className='room' id='mainroom'>
            <div id='mainRoomEasterEgg' onClick={()=> this.setPopup(this.groupPhoto)}></div>
            <div
              className='teachers'
              id='han'
              onClick={() => this.handleClick(2)}
            ></div>
            <div className="exclamation" id="exclam-han"></div>
            <div
              className='teachers'
              id='sarrah'
              onClick={() => this.handleClick(4)}
            ></div>
            <div className="exclamation" id="exclam-sarrah"></div>
            <div
              className='teachers'
              id='jv'
              onClick={() => this.handleClick(1)}
            ></div>
            <div className="exclamation" id="exclam-jv"></div>
            <div
              className='teachers'
              id='ollie'
              onClick={() => this.handleClick(3)}
            ></div>
            <div className="exclamation" id="exclam-ollie"></div>
            <div
              className='teachers'
              id='kelly'
              onClick={() => this.handleClick(5)}
            ></div>
            <div className="exclamation" id="exclam-kelly"></div>

            {this.state.popupIsShowing && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}/>}
          </div>
         
        <div id ='gong-noise' onClick={() => this.play()}> </div>
      </div>
    )
  }

  groupPhoto = (
    <img id='cohortPic' src="./images/roa2019.JPG" alt="Roa cohort"/>
  )

}

export default connect()(MainRoom)
