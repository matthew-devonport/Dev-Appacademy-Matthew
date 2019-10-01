import React from 'react'
import { getQuestions } from '../apiClient'

class PopUpBox extends React.Component {

  render() {
    let { content } = this.props
    return (
      <React.Fragment>
        <div id='popup-overlay'>
          <div id='popup'>
            <div id='popup-content'>
            {content}
            </div>
            <a id='popup-close' onClick={this.props.togglePopup}>
              &times;
            </a>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}

export default PopUpBox
