import React from 'react'
import { connect } from 'react-redux'

class PopUpBox extends React.Component {

  setPopupContent = () => {
    let { content } = this.props.popupContent
    console.log(this)
    let contentBox = document.getElementById('popup-content')
    contentBox.innerHTML = content
  }

  render() {
    return (
      <React.Fragment>
        <div className='box'>
          <a className='button' href='#popup-overlay' onClick={this.setPopupContent} id={`popup-${this.props.popupContent.name}`}>
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
  console.log(state)
  return {
    popupContent: state.popupContent
  }
}

export default connect(mapStateToProps)(PopUpBox)
