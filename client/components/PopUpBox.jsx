import React from 'react'

class PopUpBox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setPopupContent()
    this.setLinkPosition()
  }

  setPopupContent = () => {
    let { content } = this.props
    let contentBox = document.getElementById('popup-content')
    contentBox.innerHTML = content
  }

  setLinkPosition = () => {
    let { top, left, height, width } = this.props
    let linkBox= document.getElementById('popup-link-box')
    linkBox.style.position = 'fixed'
    linkBox.style.top = top
    linkBox.style.left = left
    linkBox.style.width = width
    linkBox.style.height = height
  }

  render() {
    return (
      <React.Fragment>
        <div className='box'>
          <a className='button' href='#popup-overlay' id='popup-link'>
            <div id="popup-link-box"></div>
          </a>
        </div>

        <div id='popup-overlay'>
          <div id='popup'>
            <div id='popup-content'></div>
            <a id='popup-close' href='#'>
              &times;
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpBox
