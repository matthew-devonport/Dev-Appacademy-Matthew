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

  render() {
    return (
      <React.Fragment>
        <div className='room' id='sarrahRoom'>
        <button onClick={() => this.handleClick(0)} className='homeSpace'>Home</button>
          <div>
            <div id='sarrahLinkTitles'>
              <h1 id='humanSkillsTitle'>Human Skills</h1>
              <a onClick={() => this.setPopup(this.introFeedback)} id='introFeedback' className='gradient'>Intro &#38; Feedback</a>
              <br />
              <a onClick={() => this.setPopup(this.stressRegulation)} id='stressRegulation' className='gradient'>Stress &#38; Regulation</a>
              <br />
              <a onClick={() => this.setPopup(this.internalDialogue)} id='internalDialogue' className='gradient'>Internal Dialogue &#38; Acceptance</a>
              <br />
              <a onClick={() => this.setPopup(this.biasAlly)} id='biasAlly' className='gradient'>Bias &#38; Ally Skills</a>
              <br />
              <a onClick={() => this.setPopup(this.agileTeamwork)} id='agileTeamwork' className='gradient'>Agile &#38; Teamwork</a>
              <br />
              <a onClick={() => this.setPopup(this.communicationConflict)} id='communicationConflict' className='gradient'>Communication &#38; Conflict</a>
              <br />
              <a onClick={() => this.setPopup(this.trustEmpathy)} id='trustEmpathy' className='gradient'>Trust &#38; Empathy in Teams</a>
              <br />
            </div>
            <div id='sarrahEasterEgg' onClick={() => this.setPopup(this.easterEgg)}></div>
            <div id='sarrahPopUpBox'>
            {this.state.quoteIsShowing && <QuoteBox />}
          </div>
            {this.state.popupIsShowing && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}
            />}
          </div>
        </div>
      </React.Fragment>
    )
  }

  setPopup = (content) => {
    this.togglePopup(),
      this.popupContent = content
  }

  easterEgg = (
    <div>
      <a href='https://drive.google.com/drive/folders/1L-l1U3Mxl0aIev2fHtdtiDKysfbvglYf' target='_blank'><img src='/images/Sarrah/Photobook.jpg' id="sarrahPhotoBook"></img></a>
    </div>)

  introFeedback = (
    <div>
      <h1 className='popupTitle'>Intro &amp; Feedback</h1>
      <div className='container'>
        <p className='sarrahPoints'>
          - Gratitude<br />
          - Pause &amp; Reflect<br />
          - Take What's Useful<br />
          - Seek More Feedback<br />
        </p>
        <img src="/images/Sarrah/compass-of-shame.png" id="compass-img"></img>
        <div className='sarrahAsk'>
          <h3>ASK&#58;</h3>
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
      <h1 className='popupTitle'>Stress &amp; Regulation</h1>
      <div className='container stressImgs'>
        <img src='/images/Sarrah/window-of-tolerance.jpg' id='windowOfTolerance'></img>
        <img src='/images/Sarrah/stressed.gif' id='stressed'></img>
        <img src='/images/Sarrah/wise-mind.jpg' id='emotionalThinking'></img>
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
      <h1 className='popupTitle'>Internal Dialogue &amp; Acceptance</h1>
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
      <h1 className='popupTitle'>Bias &amp; Ally Skills</h1>
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
      <h1 className='popupTitle'>Agile &amp; Teamwork</h1>
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

  communicationConflict = (
    <div>
      <h1 className='popupTitle'>Communication &amp; Conflict</h1>
      <p id='commValues'>Self Awareness - Communication - Listening</p>
      <div className='container'>

        <img src='/images/Sarrah/conflict.jpg' id='conflictImg'></img>
        <img src='/images/Sarrah/communication.jpg' id='commImg'></img>

      </div>
      <p id="commSteps">
        &hearts;&nbsp;&nbsp;
         Observations&nbsp;&nbsp;&hearts;&nbsp;&nbsp;
         Feelings&nbsp;&nbsp;&hearts;&nbsp;&nbsp;
         Needs&nbsp;&nbsp;&hearts;&nbsp;&nbsp;
         Requests&nbsp;&nbsp;&hearts;
    </p>
      <div id='popupLinks'>
        <a href='https://drive.google.com/open?id=10DxGDF5_WMlDrWIz0B3yZHgdjqSE4O9u' target='_blank'>Student Notes</a>
        <a href='https://drive.google.com/open?id=0B9G7h-RgpQk6VlpfV0dxczlVX3ZLN2Z4RXFIOExpWUE2NFJJ' target='_blank'>Feelings, Needs and Judgements</a>
      </div>
    </div>
  )

  trustEmpathy = (
    <div>
      <h1 className='popupTitle'>Trust &amp; Empathy in Teams</h1>
      <p id='bravingTitle'><strong>B &nbsp; R &nbsp; A &nbsp; V &nbsp; I &nbsp; N &nbsp; G</strong></p>
      <p id='bravingWords'>Boundaries - Reliability - Accountability - Vault - Integrity - Non-Judgement - Generosity</p>
      <div className='container'>

        <img src='/images/Sarrah/Trust.jpg' id='trustCircleImg'></img>
        <img src='/images/Sarrah/empathy.jpeg' id='empathyImg'></img>
        <img src='/images/Sarrah/Trust.png' id='trustFlowImg'></img>
      </div>
      <div id='popupLinks'>
        <a href='https://drive.google.com/open?id=1AXlGFuaL_cmnhrhsJDsFM8kVH4oPMRvs' target='_blank'>Student Notes</a>
        <a href='https://drive.google.com/open?id=1c2DAmbrKOu3kh51kw2zebLNu09L0vyb6' target='_blank'>Student Notes (Variation)</a>
        <a href='https://docs.google.com/document/d/1I36Wy8sK0QFQJlf5N8Xzcoh03myTJnezLmOUbeUGpb4/edit' target='_blank'>Resources</a>
      </div>
    </div>
  )
}

export default connect()(Sarrah)