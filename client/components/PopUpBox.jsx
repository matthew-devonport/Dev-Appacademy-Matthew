import React from 'react'
import { connect } from 'react-redux'

class PopUpBox extends React.Component {
  html = `
  <h1>Hello</h1>
  <p>Content here!</p>
  `

  componentDidMount() {
    let content = document.getElementById('popup-content')
    content.innerHTML = this.html
  }

  render() {
    return (
      <React.Fragment>
        <div className='box'>
          <a className='button' href='#popup-overlay'>
            Let me Pop up
          </a>
        </div>

        <div id='popup-overlay'>
          <div id='popup'>
              <div id='popup-content'></div>
              <a id='popup-close' href='#'>&times;</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    popUpBox: state.popUpBox
  }
}

export default connect(mapStateToProps)(PopUpBox)
