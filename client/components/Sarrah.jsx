import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'


class Sarrah extends Room {

  render() {
    return (
      <div>
        <p>Hello, I am Sarrah</p>
        <button onClick={() => this.handleClick(0)}>Home</button>
      </div>
    )
  }
}

export default connect()(Sarrah)