import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox'
import PopUpBox from './PopUpBox'

class Sarrah extends Room {
  name = 'Sarrah'
  top = '33vh'
  left = '42vw'

  popupContent = `<h1>Sarrah's Popup</h1>
  <p>This is a popup for Sarrah</p> `

  render() {
    return (
      <React.Fragment>
        <div className='room' id='sarrahRoom'>
          <p>Human Skills</p>
          <button onClick={() => this.handleClick(0)}>Home</button>
          {this.state.quoteIsShowing && <QuoteBox />}
          <div>
            <div>
              <a
                href='https://drive.google.com/folderview?id=1iExqsngQPqJX15ALewKMhRqe8dA-CPk3'
                target='_blank'
                id='introFeedback'
              >
                Intro &#38; Feedback
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=13wzi0w2w8p46sCJaIkxkl4ShEc0QT0rJ'
                target='_blank'
                id='stressRegulation'
              >
                Stress &#38; Regulation
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=1b9tgHs5M2IzIqQt2syOcAmw1dzTQl4dc'
                target='_blank'
                id='internalDialogue'
              >
                Internal Dialogue &#38; Acceptance
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=1CcM56HU7OQtfTHYk7gVFyYSgSLSh9Fwp'
                target='_blank'
                id='biasAlly'
              >
                Bias &#38; Ally Skills
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=1rgKGDw0owXTcWKq-EzyTbpZM-a2plRzU'
                target='_blank'
                id='agileTeamwork'
              >
                Agile &#38; Teamwork
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=1IfM1H48n1-bf7GbOgMU9YuakFJG1hmUh'
                target='_blank'
                id='communicationConflict'
              >
                Communication &#38; Conflict
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=1xO78F0rOVHJDOWYKog7vK-7vx3GFP7sK'
                target='_blank'
                id='trustEmpathy'
              >
                Trust &#38; Empathy in Teams
              </a>
              <br />
              <a
                href='https://drive.google.com/folderview?id=1o7J7W7IFF0bFWN7zNImHLLXzAQ1LgLmP'
                target='_blank'
                id='retroReflection'
              >
                Retrospective &#38; Reflection
              </a>
              <br />
            </div>
            <div id='sarrahPopup'>
              <PopUpBox />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Sarrah)