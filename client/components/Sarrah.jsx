import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox'
import PopUpBox from './PopUpBox'

class Sarrah extends Room {
  name = 'Sarrah'
  top = '33vh'
  left = '42vw'

  popupContent = ''

  setPopup = (content) => {
    this.togglePopup(),
      this.popupContent = content
  }

  easterEgg = (
    <div><h1>Sarrah's Popup</h1>
      <p>This is a popup for Sarrah</p>
    </div>)

  introFeedback = (
    <div>
      <h1 className='sarrahTitle'>Intro &amp; Feedback</h1>
      <div className='container'>

        <p className='sarrahPoints'>
          - Gratitude<br />
          - Pause &amp; Reflect<br />
          - Take What's Useful<br />
          - Seek More Feedback<br />
        </p>
        <img src="/images/Sarrah/compass-of-shame.jpg" id="compass-img"></img>
        <div className='sarrahAsk'>
          <h3>ASK</h3>
          Actionable<br />
          Specific<br />
          Kind<br />
        </div>
      </div>
      <div id='popupLinks'>

        <a href='https://docs.google.com/document/d/1mXGydSKXC8J3WAXIyHJoT_r7SNHlouXj8nzFDbxzmyc/edit' target='_blank'>Facilitator Notes</a>
        <a href='https://docs.google.com/document/d/1sOqLO0KTRDm8Fo-Ge-fcA11jgrHyWYoChwZ6D64PEzA/edit' target='_blank'>Facilitator Recommended Reading</a>
        <a href='https://docs.google.com/document/d/178QAtvlPYSpVOdQf2zlnHOHKZRO8uyjbE3t3obhH0_I/edit' target='_blank'>Facilitator Runsheet</a>
        <a href='https://docs.google.com/document/d/1Vjwpml96tPkcWO9bXsKmuCD_8BvxhuMiizpLUG5RJJQ/edit' target='_blank'>Student Notes</a>
        <a href='https://drive.google.com/open?id=1KQzhvZr8jTgilNJuHifDNxfBDDEtMiTx' target='_blank'>Student Notes (PDF)</a>
        <a href='https://drive.google.com/open?id=1AA3yQ7Z55Prt8j-rL7WBxxag3IkPJ-ZT' target='_blank'>Human Skills<br /> Session 1 Workbook PDF</a>
        <a href='https://docs.google.com/document/d/16sxw6CnGI987h97AsR6bZuTwShAmn-gOic7tTvZqs7A/edit' target='_blank'>Additional Student Resources</a>

      </div>

    </div>
  )

  stressRegulation = (
    <div>
      <h1 className='sarrahTitle'>Stress &amp; Regulation</h1>
      <div className='container'>
        <img src='/images/Sarrah/window-of-tolerance.jpg' id='windowOfTolerance'></img>
    
    <img src='/images/Sarrah/emotional-thinking-mind.gif' id='emotionalThinking'></img>

        </div>
        <p id ="stressRegulationPoints">
          ~ Deep Breathing
          - Self Compassion
          - Bilateral Stimulation
          - Feelings &amp; Needs
          ~
    </p>
        <div id='popupLinks'>
          <a href='https://docs.google.com/document/d/1YQtYh43HHlqdOAftx4yMFAqiEkc--9tlbBO7d0cPn6Q/edit' target='_blank'>Facilitator Notes</a>
          <a href='https://docs.google.com/document/d/1784GHsFn7F-2Kc2G8xwm0VINjbu4U9J1OpmZlAunIFY/edit' target='_blank'>Facilitator Runsheet</a>
          <a href='https://docs.google.com/document/d/1KKvnfOjmpgMCoNNpS1W24AuzCA2Cb8mzwuFHuVeqjio/edit' target='_blank'>Recommended Reading</a>
          <a href='https://docs.google.com/document/d/1v5Fm24_z_eqQOs3QJesphXwsPTPv0pzxppw2VhUKswU/edit' target='_blank'>Student Notes</a>
          <a href='https://drive.google.com/open?id=1QGTO3TQejwB5Ncv_jHF8h3k-ZLw62Rmh' target='_blank'>Student Notes (PDF)</a>
          <a href='https://drive.google.com/drive/folders/13wzi0w2w8p46sCJaIkxkl4ShEc0QT0rJ' target='_blank'>Checklist: I'm Not OK</a>


        
      </div>
    </div>
  )




  render() {
    return (
      <React.Fragment>
        <div className='room' id='sarrahRoom'>
          <p>Human Skills</p>
          <button onClick={() => this.handleClick(0)}>Home</button>
          {/* {this.state.quoteIsShowing && <QuoteBox />} */}
          <div>
            <div>
              <a
                onClick={() => this.setPopup(this.introFeedback)}
                id='introFeedback'
              >
                Intro &#38; Feedback
              </a>
              <br />
              <a
                onClick={() => this.setPopup(this.stressRegulation)}
                id='introFeedback'
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
            <div id="temporary" onClick={() => this.setPopup(this.easterEgg)}>Easter egg: Click me!</div>
            {this.state.popupIsShowing && <PopUpBox
              content={this.popupContent}
              togglePopup={this.togglePopup}
            />}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Sarrah)