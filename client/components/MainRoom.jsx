import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'


class MainRoom extends Room {
  name = `MainRoom`

  play = () => {
    let audio = new Audio("./sounds/Gong.mp3")
    audio.play()
  }

  render() {
    return (
      <div id='content'>
          <div className='room' id='mainroom'>
            {/* Changing the order of the divs will break the CSS */}
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
          </div>
         
        <div id ='gong-noise' onClick={() => this.play()}> </div>
      </div>
    )
  }
}

export default connect()(MainRoom)
