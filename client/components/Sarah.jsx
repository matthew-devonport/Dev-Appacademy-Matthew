import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'


class Sarah extends Room {

  render() {
    return (
      <div>
        <p>Hello, I am Sarah</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
      </div>
    )
  }
}

export default connect()(Sarah)