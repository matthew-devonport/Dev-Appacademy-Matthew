import React from 'react'
import { connect } from 'react-redux';


class QuoteBox extends React.Component {
  
  render() {
    let {quote, top, left} = this.props.quoteBox    
    return (
      <div id="quote-box" style={{top, left}}>{quote}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quoteBox: state.quoteBox
  }
}

export default connect(mapStateToProps)(QuoteBox)