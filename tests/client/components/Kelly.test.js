import React from 'react'
import { shallow } from 'enzyme'

// import { getQuotesByName } from '../../../client/apiClient'

import Kelly from '../../../client/components/Kelly'

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

describe('<Kelly /> Component', () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Kelly dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.componentDidMount()
  })

  test('quotes get placed onto state', () => {
    expect.assertions(1)
    expect(instance.state.quotes.length).toBe(2)
  })

  test('clicking button calls dispatch', () => {
    expect.assertions(1)
    let button = wrapper.find('button')
    button.simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })

  test('clicking potato calls popup', () => {
    expect.assertions(1)
    let button = wrapper.find('#potato-box')
    button.simulate('click')
    expect(instance.state.popupIsShowing).toBeTruthy()
  })
})