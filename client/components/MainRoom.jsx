import React from 'react'
import Jv from './Jv'
import Han from './Han'
import Ollie from './Ollie'
import Sarah from './Sarah'
import Kelly from './Kelly'
import { connect } from 'react-redux'
import Room from './Room'


class MainRoom extends Room {
  render() {
    return (
      <div>
        {this.props.page == 0 && <div>
          <p>You are on the homepage</p>
          <button onClick={() => this.handleClick(1)}>JV</button>
          <button onClick={() => this.handleClick(2)}>Han</button>
          <button onClick={() => this.handleClick(3)}>Ollie</button>
          <button onClick={() => this.handleClick(4)}>Sarah</button>
          <button onClick={() => this.handleClick(5)}>Kelly</button>
        </div>}

        {this.props.page == 1 && <Jv />}
        {this.props.page == 2 && <Han />}
        {this.props.page == 3 && <Ollie />}
        {this.props.page == 4 && <Sarah />}
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
