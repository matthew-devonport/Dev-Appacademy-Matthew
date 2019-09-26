import React from 'react'
import Jv from './Jv'
import Han from './Han'
import Ollie from './Ollie'
import Sarrah from './Sarrah'
import Kelly from './Kelly'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox'



class MainRoom extends Room {

  render() {
    return (
      <div id="content">
        {this.props.page == 0 && <div className="room" id='mainroom'>
          <div className="teachers" id="ollie" onClick={() => this.handleClick(3)}>Ollie</div>
          <div className="teachers" id="han" onClick={() => this.handleClick(2)}>Han</div>
          <div className="teachers" id="jv" onClick={() => this.handleClick(1)}>JV</div>
          <div className="teachers" id="sarrah" onClick={() => this.handleClick(4)}>Sarrah</div>
          <div className="teachers" id="kelly" onClick={() => this.handleClick(5)}>Kelly</div>
        </div>}

        {this.props.page == 1 && <Jv />}
        {this.props.page == 2 && <Han />}
        {this.props.page == 3 && <Ollie />}
        {this.props.page == 4 && <Sarrah />}
        {this.props.page == 5 && <Kelly />}
        {/* <QuoteBox /> */}
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
