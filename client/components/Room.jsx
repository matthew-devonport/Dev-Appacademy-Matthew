import React from 'react'

import { changePage, setQuoteBox } from '../actions'

import { getQuotesByName } from '../apiClient'

class Room extends React.Component {
  state = {
    quoteIsShowing: false,
    interval: null,
    quotes: [],
    popupIsShowing: false,
  }

  unmounted = false

  componentDidMount() {
    if (this.name == 'MainRoom') { return }
    this.getQuotes()
    this.setQuoteInterval()
  }

  componentWillUnmount() {
    this.setState({ quoteIsShowing: false })
    this.unmounted = true
    clearInterval(this.state.interval)
  }

  getQuotes = () => {
    getQuotesByName(this.name).then(quotes => {
      this.setState({ quotes: quotes.body })
    })
  }

  setQuoteInterval = () => {
    let interval = setInterval(this.toggleQuote, 15000)
    this.setState({
      interval: interval
    })
  }

  toggleQuote = () => {
    this.setQuote()
    this.setState({
      quoteIsShowing: !this.state.quoteIsShowing
    })

    setTimeout(() => {
      if (!this.unmounted) {
        this.setState({
          quoteIsShowing: !this.state.quoteIsShowing
        })
      }
    }, 3000)
  }

  setQuote = () => {
    const { dispatch } = this.props
    const { quotes } = this.state
    let randNum = Math.floor(Math.random() * quotes.length)
    dispatch(setQuoteBox(quotes[randNum].quote, this.top, this.left))
  }

  togglePopup = () => {
    this.setState({
      popupIsShowing: !this.state.popupIsShowing
    })
  }

  handleClick = pageNum => {
    const { dispatch } = this.props
    dispatch(changePage(pageNum))
  }

  render() { null }
}

export default Room
