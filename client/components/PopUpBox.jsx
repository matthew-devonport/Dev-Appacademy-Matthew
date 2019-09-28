import React from 'react'

class PopUpBox extends React.Component {
  constructor(props) {
    super(props)
    let { top, left, height, width, content } = this.props
    this.state = {
      showing: false,
      top,
      left,
      height,
      width,
      content
    }
  }

  togglePopup = () => {
    this.setState({
      showing: !this.state.showing
    })
  }

  render() {
    let { showing, top, left, height, width, content } = this.state
    return (
      <React.Fragment>
          <div id='popup-link-box' style={{
            position: 'absolute',
            top,
            left,
            width,
            height
          }} onClick={this.togglePopup}></div>

        {showing && <div id='popup-overlay'>
          <div id='popup'>
            <div id='popup-content'>{content}</div>
            <a id='popup-close' onClick={this.togglePopup}>
              &times;
            </a>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}

export default PopUpBox
