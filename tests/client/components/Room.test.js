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
      return Promise.resolve({
        body: [{ quote: 'quote1' }, { quote: 'quote2' }]
      })
    })
  }
})

// jest.mock('../../../client/actions', () => {
//   return {
//     changePage: jest.fn((num) => {
//       return Promise.resolve(num)
//     })
//   }
// })

describe('Parent <Room /> Component', () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Room dispatch={dispatch} />)
    instance = wrapper.instance()
  })

  test('getQuotes places quotes onto state', async () => {
    expect.assertions(1)
    await instance.getQuotes()
    expect(instance.state.quotes.length).toBe(2)
  })

  test('setQuoteInterval creates an interval and stores it on the state', async () => {
    expect.assertions(1)
    await instance.setQuoteInterval()
    expect(instance.state.interval).toBeDefined()
  })

  test('toggleQuote changes the state and calls dispatch', async () => {
    expect.assertions(2)
    await instance.toggleQuote()
    expect(instance.state.quotes.length).toBeDefined()
    expect(dispatch).toHaveBeenCalled()
  })

  test('setQuote dispatches a random quote', async () => {
    expect.assertions(4)
    instance.top = 10
    instance.left = 12
    await instance.getQuotes()
    await instance.setQuote()

    let callInfo = dispatch.mock.calls[0][0]
    let testQuotes = ['quote1', 'quote2']

    expect(dispatch).toHaveBeenCalled()
    expect(callInfo.top).toBe(10)
    expect(callInfo.left).toBe(12)
    expect(testQuotes).toEqual(expect.arrayContaining([callInfo.quote]))
  })

  test('togglePopup flips the popup', async () => {
    expect.assertions(2)

    await instance.togglePopup()
    expect(instance.state.popupIsShowing).toBeTruthy()

    await instance.togglePopup()
    expect(instance.state.popupIsShowing).not.toBeTruthy()
  })

  test('handleClick calls dispatch with provided number', async () => {
    expect.assertions(1)

    await instance.handleClick(3)
    expect(dispatch).toHaveBeenCalledWith({ page: 3, type: 'CHANGE_PAGE' })
  })
})
