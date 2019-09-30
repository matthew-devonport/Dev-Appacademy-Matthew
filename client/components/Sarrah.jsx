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
        <a href='https://docs.google.com/document/d/1sOqLO0KTRDm8Fo-Ge-fcA11jgrHyWYoChwZ6D64PEzA/edit' target='_blank'>Facilitator Recommended Reading</a>
        <a href='https://drive.google.com/open?id=1KQzhvZr8jTgilNJuHifDNxfBDDEtMiTx' target='_blank'>Student Notes</a>
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
      <p id="stressRegulationPoints">
        ~ Deep Breathing
        - Self Compassion
        - Bilateral Stimulation
        - Feelings &amp; Needs
        ~
    </p>
      <div id='popupLinks'>
        <a href='https://docs.google.com/document/d/1KKvnfOjmpgMCoNNpS1W24AuzCA2Cb8mzwuFHuVeqjio/edit' target='_blank'>Recommended Reading</a>
        <a href='https://drive.google.com/open?id=1QGTO3TQejwB5Ncv_jHF8h3k-ZLw62Rmh' target='_blank'>Student Notes</a>
        <a href='https://drive.google.com/drive/folders/13wzi0w2w8p46sCJaIkxkl4ShEc0QT0rJ' target='_blank'>Checklist: I'm Not OK</a>
      </div>
    </div>
  )

  internalDialogue = (
    <div>
      <h1 className='sarrahTitle'>Interal Dialogue &amp; Acceptance</h1>
      <div className='container'>
        <img src='/images/Sarrah/Internal_Dialogue_01.jpg' id='internalDialogueImg'></img>
        <p className='sarrahPoints'>
          <strong>Self Compassion</strong><br />
          - Mindfulness<br />
          - Kindness<br />
          - Acceptance<br />
          - Shared Humanity<br />
        </p>
      </div>

      <div id='popupLinks'>
        <a href='https://docs.google.com/document/d/1x-fBRYSqryLRxDAL9B5LSp28qhhOTwesnII7hXic1To/edit' target='_blank'>Recommended Reading</a>
        <a href='https://docs.google.com/document/d/1ReGImSjg5-xGTv97ZGz4z3C5ouyBU052MNtr4gh6hfk/edit' target='_blank'>Student Notes</a>
        <a href='https://docs.google.com/document/d/16B0vPu58BH61fNMyt5tdtNqphzm8y6e9roBqES6Cb68/edit' target='_blank'> More Student Notes</a>
        <a href='https://drive.google.com/open?id=1b2P5HROjP0ICxIyWlgib5aLzfYg5Odki' target='_blank'>Student Notes (PDF)</a>
        <a href='https://docs.google.com/document/d/1xQESlbkj6BvADKiZ0LY3UwhNBa3PG-pLbYJ8OoPdb8Q/edit' target='_blank'>Additional Student Resources</a>
      </div>
    </div>
  )

  biasAlly = (
    <div>
      <h1 className='sarrahTitle'>Bias &amp; Ally Skills</h1>
      <p id='allyQuestion'>
        "How do I become a good ally?"
        </p>
      <div className='container'>
        <img src='/images/Sarrah/unconscious-bias.jpg' id='unconsciousBiasImg'></img>
        <img src='/images/Sarrah/ally.jpg' id='allyImg'></img>

      </div>

      <div id='popupLinks'>
        <a href='https://docs.google.com/document/d/1fqOBF7VZIToEtA-ESpynO_ZyJpEH0u7_I4N9N3_PGWo/edit' target='_blank'>Bias, Diversity &amp; Growth Mindset</a>
        <a href='https://docs.google.com/document/d/1iCjkv637O0XU0mT6cFu8I250byF75Woh2BLLhLuRTRU/edit' target='_blank'>Resources</a>
        <a href='https://drive.google.com/open?id=19AD_fFV45QztRGC_zb6ftpQKLqr_7Z0o' target='_blank'>Student Notes</a>

      </div>
    </div>
  )

  agileTeamwork = (
    <div>
      <h1 className='sarrahTitle'>Bias &amp; Ally Skills</h1>
      <div className='container'>
        <img src='/images/Sarrah/scrum-agile.jpg' id='agileFlowImg'></img>
        <img src='/images/Sarrah/scrum-values.png' id='agileValues'></img>

      </div>
      <p id="agileFlow">
       Planning &rarr;
       Sprints &rarr;
       Stand Ups&rarr;
       Review &amp; Needs &rarr;
       Retrospective
    </p>
      <div id='popupLinks'>
        <a href='https://drive.google.com/open?id=1JQjp8g9Q52AayACc22w8rrKGo8F3MJxT' target='_blank'>Student Notes</a>
        <a href='https://docs.google.com/document/d/1kSdE6N3JnK_izJQJ-1Y1kGWJjTAPvJZaRymqqKkZi88/edit' target='_blank'>Resources</a>
        <a href='https://drive.google.com/open?id=19N9goVu68nWmHS7H1FbvIvhsE905KfQB' target='_blank'>Agile in Te Reo Maori</a>

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

                id='stressRegulation'
              >
                Stress &#38; Regulation
              </a>
              <br />
              <a
                onClick={() => this.setPopup(this.internalDialogue)}
                id='internalDialogue'
              >
                Internal Dialogue &#38; Acceptance
              </a>
              <br />
              <a
                onClick={() => this.setPopup(this.biasAlly)}
                id='biasAlly'
              >
                Bias &#38; Ally Skills
              </a>
              <br />
              <a
                onClick={() => this.setPopup(this.agileTeamwork)} 
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