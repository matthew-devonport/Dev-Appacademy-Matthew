import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'


class Ollie extends Room {

  render() {
    return (
      <div>
        <p>Hello, I am Ollie</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
      </div>
    )
  }
}

export default connect()(Ollie)
