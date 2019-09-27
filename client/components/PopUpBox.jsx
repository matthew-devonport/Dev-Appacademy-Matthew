import React from 'react'
import { connect } from 'react-redux'

class PopUpBox extends React.Component {

  setPopupContent = () => {
    let { popupContent } = this.props
    console.log(this)
    let content = document.getElementById('popup-content')
    content.innerHTML = popupContent
  }

  render() {
    return (
      <React.Fragment>
        <div className='box'>
          <a className='button' href='#popup-overlay' onClick={this.setPopupContent}>
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
    popupContent: state.popupContent
  }
}

export default connect(mapStateToProps)(PopUpBox)
