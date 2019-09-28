import React from 'react'
import Jv from './Jv'
import Han from './Han'
import Ollie from './Ollie'
import Sarrah from './Sarrah'
import Kelly from './Kelly'
import { connect } from 'react-redux'
import Room from './Room'


class MainRoom extends Room {
  popupContent = ``
  render() {
    return (
      <div id='content'>
        {this.props.page == 0 && (
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
        )}

        {this.props.page == 1 && <Jv />}
        {this.props.page == 2 && <Han />}
        {this.props.page == 3 && <Ollie />}
        {this.props.page == 4 && <Sarrah />}
        {this.props.page == 5 && <Kelly />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(MainRoom)
