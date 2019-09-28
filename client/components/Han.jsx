import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox';
import PopUpBox from './PopUpBox'


class Han extends Room {
  name = 'Han'
  top = '80vh'
  left = '33vw'

  popupContent = <p>test</p>

  render() {
    return (
      <div id='hanBackground'>
        <div className='room' id='hanRoom'>
          <button onClick={() => this.handleClick(0)}>Home</button>
          <div id='mindfulness'>
            <p className='technic button deg270'>
              Mindfulness
          </p>
       
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
          <PopUpBox
            content={this.popupContent}
            top='1vh'
            left='1vw'
            height='10vh'
            width='5vw'
          />
          {/* {this.state.quoteIsShowing && <QuoteBox />} */}
        </div>
      </div>
    )
  }
}

export default connect()(Han)