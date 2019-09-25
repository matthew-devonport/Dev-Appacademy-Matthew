import React from 'react'

import { changePage } from '../actions'


class Room extends React.Component {

    state = {
        quoteIsShowing: false,
        interval: null
    }

    componentDidMount() {
        console.log('mounted boiii')
        this.setQuoteInterval()
    }

    componentWillUnmount() {
        console.log('unmounted')
        clearInterval(this.state.interval)
    }

    setQuoteInterval = () => {
        let interval = setInterval(this.toggleQuote, 1000)
        this.setState({
            interval: interval
        })
    }

    toggleQuote = () => {
        this.setState({
            quoteIsShowing: !this.state.quoteIsShowing
        })
        console.log(this.state)
    }

    handleClick = (pageNum) => {
        const { dispatch } = this.props
        dispatch(changePage(pageNum))
    }

    createTextBox = () => {
        console.log(this.state)
    }
}

export default Room
