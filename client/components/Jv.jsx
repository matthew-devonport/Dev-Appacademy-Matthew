import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'


class Jv extends Room {

  render() {
    return (
      <div>
        <p>Hello, I am JV</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
      </div>
    )
  }
}

export default connect()(Jv)
