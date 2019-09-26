import React from 'react'
import { connect } from 'react-redux';


class QuoteBox extends React.Component {

  render() {
    let {quoteBox} = this.props
    console.log(this.props)
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