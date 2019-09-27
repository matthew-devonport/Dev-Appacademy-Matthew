import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';


class Han extends Room {
  name = 'Han'
  top = '20vh'
  left = '20vw'

  popupContent = ``

  render() {
    return (
      <div className='room' id='hanRoom'>
        <div id='mindfulness'>
          <a className='technic button deg270' href='#popup'>
            Mindfulness
          </a>
          <a className='technic button deg342' href='#popup'>
            Sounds
          </a>
          <a className='technic button deg135' href='#popup'>
            Body Check
          </a>
          <a className='technic button deg180' href='#popup'>
            Breath
          </a>
          <a className='technic button deg236' href='#popup'>
            Intentions
          </a>
          <a className='technic button deg306' href='#popup'>
            5 Senses
          </a>
        </div>
        <button onClick={() => this.handleClick(0)}>Home</button>
        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
    )
  }
}

export default connect()(Han)


4288*3216
5472*3648