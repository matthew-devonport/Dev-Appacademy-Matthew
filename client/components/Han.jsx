import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';


class Han extends Room {
  name = 'Han'
  top = '80vh'
  left = '33vw'

  popupContent = `<p>test</p>`

  render() {
    return (
      <div id='hanBackground'>
      <div className='room' id='hanRoom'>
      <button onClick={() => this.handleClick(0)}>Home</button>
        <div id='mindfulness'>
          <a className='technic button deg270' href='#popup'>
            Mindfulness
          </a>
          <a className='technic button deg0' href='#popup'>
            Sounds
          </a>
          <a className='technic button deg135' href='#popup'>
            Body Scan
          </a>
          <a className='technic button deg180' href='#popup'>
            Breath
          </a>
          <a className='technic button deg220' href='#popup'>
            Metta
          </a>
          <a className='technic button deg320' href='#popup'>
            5 Senses
          </a>
          <a className='technic button deg45' href='#popup'>
            R.A.I.N
          </a>
        </div>
        {this.state.quoteIsShowing && <QuoteBox />}
      </div>
      </div>
    )
  }
}

export default connect()(Han)