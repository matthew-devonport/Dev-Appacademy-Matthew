import React from 'react'

import { changePage } from '../actions'



class Room extends React.Component {

    state = {
        quoteIsShowing: false,
        interval: null
    }

    componentDidMount() {
        if (this.props.page == 0) { return }
        console.log('mounted boiii', this.name)
        this.setQuoteInterval()
    }

    componentWillUnmount() {
        console.log('unmounted')
        clearInterval(this.state.interval)
    }

    setQuoteInterval = () => {
        let interval = setInterval(this.toggleQuote, 15000)
        this.setState({
            interval: interval
        })
    }

    toggleQuote = () => {
        this.setState({
            quoteIsShowing: !this.state.quoteIsShowing
        })
        setTimeout(() => {
            this.setState({
                quoteIsShowing: !this.state.quoteIsShowing
            })
        }, 5000)
    }

    showQuote = () => {

    }

    handleClick = (pageNum) => {
        const { dispatch } = this.props
        dispatch(changePage(pageNum))
    }
}

export default Room
