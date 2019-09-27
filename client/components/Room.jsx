import React from 'react'

import { changePage, setQuoteBox, setPopup } from '../actions'

import { getQuotesByName } from '../apiClient'

class Room extends React.Component {
  state = {
    quoteIsShowing: false,
    interval: null,
    quotes: []
  }

  unmounted = false

  componentDidMount() {
    this.setPopup()
    if (this.props.page == 0) { return }
    this.getQuotes()
    this.setQuoteInterval()
  }

  componentWillUnmount() {
    this.setPopup('')
    this.setState({ quoteIsShowing: false })
    this.unmounted = true
    clearInterval(this.state.interval)
  }

  setPopup = (content = this.popupContent, ) => {
    const { dispatch } = this.props
    dispatch(setPopup(content, this.name))
  }

  getQuotes = () => {
    getQuotesByName(this.name).then(quotes => {
      this.setState({ quotes: quotes.body })
    })
  }

  setQuoteInterval = () => {
    let interval = setInterval(this.toggleQuote, 3000)
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
    }, 1000)
  }

  setQuote = () => {
    const { dispatch } = this.props
    let randNum = Math.floor(Math.random() * this.state.quotes.length)
    dispatch(setQuoteBox(this.state.quotes[randNum].quote, this.top, this.left))
  }

  handleClick = pageNum => {
    const { dispatch } = this.props
    dispatch(changePage(pageNum))
  }
}

export default Room
