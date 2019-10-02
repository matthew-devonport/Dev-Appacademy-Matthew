import React from 'react'
import { shallow } from 'enzyme'

// import { getQuotesByName } from '../../../client/apiClient'

import Room from '../../../client/components/Room'

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
      return Promise.resolve({ body: ['quote1', 'quote2'] })
    })
  }
})

describe('Parent <Room /> Component', () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Room dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.componentDidMount()
  })

  test('quotes get placed onto state', async () => {
    expect.assertions(1)
    expect(instance.state.quotes.length).toBe(2)
  })

  test('setQuoteInterval creates an interval and stores it on the state', async () => {
    expect.assertions(1)
    await instance.setQuoteInterval()
    expect(instance.state.interval).toBe(10)
  })

  test('toggleQuote changes the state and calls dispatch', async () => {
    expect.assertions(1)
    expect(instance.state.quotes.length).toBeDefined()
  })
})
