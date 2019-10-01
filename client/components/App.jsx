import React from 'react'
import Jv from './Jv'
import Han from './Han'
import Ollie from './Ollie'
import Sarrah from './Sarrah'
import Kelly from './Kelly'
import MainRoom from './MainRoom'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return (
      <div id='content'>
        {this.props.page == 0 && <MainRoom />}

        {this.props.page == 1 && <Jv />}
        {this.props.page == 2 && <Han />}
        {this.props.page == 3 && <Ollie />}
        {this.props.page == 4 && <Sarrah />}
        {this.props.page == 5 && <Kelly />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
