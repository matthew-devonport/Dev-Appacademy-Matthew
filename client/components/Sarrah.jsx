import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import QuoteBox from './QuoteBox'
import PopUpBox from './PopUpBox'

class Sarrah extends Room {
  name = 'Sarrah'
  top = '33vh'
  left = '42vw'

  popupEasterEgg = (
    <div><h1>Sarrah's Popup</h1>
      <p>This is a popup for Sarrah</p>
    </div>)


  introFeedback = (
    <div>
      <h1>Intro &amp; Feedback</h1>
      <div class='container'>
        <img src="/images/Sarrah/compass-of-shame.jpg" id="compass-img"></img>
        <p>
          - Gratitude<br />
          - Pause &amp; Reflect<br />
          - Take Only What's Useful<br />
          - Seek For More Feedback<br />
        </p>
        <p>
          <h3>ASK</h3>
          Actionable<br />
          Specific<br />
          Kind<br />
          </p>
</div>
        <div id='popupLinks'>

          <a href='https://docs.google.com/document/d/1mXGydSKXC8J3WAXIyHJoT_r7SNHlouXj8nzFDbxzmyc/edit' target='_blank'>Communication and Feedback - Facilitator Notes</a>
          <br />  <br />
          <a href='https://docs.google.com/document/d/1sOqLO0KTRDm8Fo-Ge-fcA11jgrHyWYoChwZ6D64PEzA/edit' target='_blank'>Feedback - Facilitator Recommended Reading</a>
          <br />  <br />
          <a href='https://docs.google.com/document/d/178QAtvlPYSpVOdQf2zlnHOHKZRO8uyjbE3t3obhH0_I/edit' target='_blank'>Feedback - Facilitator Runsheet</a>
          <br />  <br />
          <a href='https://docs.google.com/document/d/1Vjwpml96tPkcWO9bXsKmuCD_8BvxhuMiizpLUG5RJJQ/edit' target='_blank'>Feedback - Student Notes</a>
          &nbsp;-&nbsp;
      <a href='https://drive.google.com/open?id=1KQzhvZr8jTgilNJuHifDNxfBDDEtMiTx' target='_blank'>(Feedback - Student Notes PDF)</a>
          <br />  <br />
          <a href='https://drive.google.com/open?id=1AA3yQ7Z55Prt8j-rL7WBxxag3IkPJ-ZT' target='_blank'>Human Skills - Session 1 Workbook PDF</a>
          <br />  <br />
          <a href='https://docs.google.com/document/d/16sxw6CnGI987h97AsR6bZuTwShAmn-gOic7tTvZqs7A/edit' target='_blank'>Additional Student Resources</a>

        </div>
      
    </div>



  )
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

            <PopUpBox
              content={this.popupEasterEgg}
              top='57vh'
              left='150vh'
              height='10vh'
              width='5vh' />
            <PopUpBox
              content={this.introFeedback}
              margin='0 auto'
              top='5vh'
              right='70vh'
              width='50vh'
              height='50vh'
              position='relative' />

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Sarrah)