import React from 'react'
import { shallow } from 'enzyme'

import Ollie from '../../../client/components/Ollie.jsx'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

jest.mock('../../../client/apiClient', () => {
  return {
    getQuestions: jest.fn(() => {
      return Promise.resolve({questions: ['question1', 'question2']})
    }),
    getQuotesByName: jest.fn(() => {
      return Promise.resolve({body: ['quote1', 'quote2']})
    })
  }
})

describe('<Ollie /> Component', () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Ollie dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.componentDidMount()
    
  })

  test('Questions get put into state', async () => {
    await instance.setQuestions()
    expect.assertions(1)
    console.log(instance.state)
    expect(instance.state.questions.length).toBe(2)
  })

  test("clicking ollie-popUp div calls popup", () => {
    instance.setPopup = jest.fn()
    let div = wrapper.find('#ollie-popUp')
    div.simulate('click')
    expect(instance.setPopup).toHaveBeenCalled()
  })

  test("clicking clap-box div plays audio", () => {
    instance.play = jest.fn()
    let div = wrapper.find('#clap-box')
    div.simulate('click')
    expect(instance.play).toHaveBeenCalled()
  })

  test('clicking button calls dispatch', () => {
    expect.assertions(1)
    let button = wrapper.find('button')
    button.simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})