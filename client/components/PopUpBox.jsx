import React from 'react'

class PopUpBox extends React.Component {
  constructor(props) {
    super(props)
    let { content } = this.props
    this.state = {
      content
    }
  }


  render() {
    let { content } = this.state
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
