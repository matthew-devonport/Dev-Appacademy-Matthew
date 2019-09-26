import React from 'react';
import { connect } from 'react-redux';

class PopUpBox extends React.Component {
  html = <h1>Hello</h1>
  render() {
    return (
      <React.Fragment>
        <div className='box'>
          <a className='button' href='#popup1'>
            Let me Pop up
          </a>
        </div>

        <div id='popup1' className='overlay'>
          <div className='popup'>
            <h2>Here i am</h2>
            <a className='close' href='#'>
              &times;
            </a>
            <div className='content'>
              Thank to pop me out of that button, but now i'm done so you can
              close this window.
              {this.html}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    popUpBox: state.popUpBox
  };
}


export default connect(mapStateToProps)(PopUpBox);
