import React from 'react'

class PopUpBox extends React.Component {

  render() {
    let { content, togglePopup } = this.props
    return (
      <React.Fragment>
        <div id='popup-overlay'>
          <div id='popup'>
            <div id='popup-content'>
            {content}
            </div>
            <a id='popup-close' onClick={togglePopup}>
              &times;
            </a>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}

export default PopUpBox
