import React from 'react'

import { changePage } from '../actions'

import { getQuotesByName } from '../apiClient'

class Room extends React.Component {

    state = {
        quoteIsShowing: false,
        interval: null
    }

    componentDidMount() {
        if (this.props.page == 0) { return }
        console.log('mounted boiii', this.name)
        this.setQuoteInterval()
        this.getQuote()
    }

    componentWillUnmount() {
        console.log('unmounted')
        clearInterval(this.state.interval)
    }

     getQuote = () => {
      getQuotesByName(this.name)
      .then(quotes => {
          console.log(quotes.body)
      })
      
     }
    setQuoteInterval = () => {
        let interval = setInterval(this.toggleQuote, 5000)
        this.setState({
            interval: interval
        })
    }

    toggleQuote = () => {
        this.setState({
            quoteIsShowing: !this.state.quoteIsShowing
        })
        console.log(this.state)
        setTimeout(() => {
            this.setState({
                quoteIsShowing: !this.state.quoteIsShowing
            })
            console.log(this.state)
        }, 1000)
    }

    handleClick = (pageNum) => {
        const { dispatch } = this.props
        dispatch(changePage(pageNum))
    }
}

export default Room
