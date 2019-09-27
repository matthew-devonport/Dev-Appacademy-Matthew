import React from 'react'
import { connect } from 'react-redux';


class QuoteBox extends React.Component {
  
  componentDidMount() {
    let { top, left } = this.props.quoteBox;
    let box = document.getElementById('quote-box');
    box.style.top = top;
    box.style.left = left;
  }

  render() {
    let {quoteBox} = this.props
    
    return (
      <div id="quote-box">{quoteBox.quote}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quoteBox: state.quoteBox
  }
}

export default connect(mapStateToProps)(QuoteBox)