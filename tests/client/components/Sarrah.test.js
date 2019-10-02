import React from 'react'
import { shallow } from 'enzyme'

// import { getQuotesByName } from '../../../client/apiClient'

import Sarrah from '../../../client/components/Sarrah'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return component => component
    }
  }
})

jest.mock('../../../client/apiClient', () => {
  return {
    getQuotesByName: jest.fn(() => {
      return Promise.resolve({body: ['quote1', 'quote2']})
    })
  }
})

describe('<Sarrah /> Component', () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Sarrah dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.componentDidMount()
  })

  test('quotes get placed onto state', () => {
    expect.assertions(1)
    expect(instance.state.quotes.length).toBe(2)
  })

  test('clicking button calls dispatch', () => {
    expect.assertions(1)
    let button = wrapper.find('#sarrahHome')
    button.simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })

  test('clicking book calls popup', () => {
    expect.assertions(1)
    let button = wrapper.find('#sarrahEasterEgg')
    button.simulate('click')
    expect(instance.state.popupIsShowing).toBeTruthy()
  })

  test('clicking Intro & Feedback text calls popup', () => {
    expect.assertions(1)
    let button = wrapper.find('#introFeedback')
    button.simulate('click')
    expect(instance.setPopup).toBeTruthy()
  })
})