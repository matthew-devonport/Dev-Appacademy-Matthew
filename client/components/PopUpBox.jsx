import React from 'react'

class PopUpBox extends React.Component {
  constructor(props) {
    super(props)
    let { title, content } = this.props
    this.state = {
      title,
      content
    }
  }


  render() {
    let { title, content } = this.state
    return (
      <React.Fragment>
        <div id='popup-overlay'>
          <div id='popup'>
            <div id='popup-content'>
            <h1>{title}</h1>
            <div>{content}</div>
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
