import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import '../config/enzyme'

import Han from '../../../client/components/Han'

// jest.mock('../../../client/components/Room')
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

describe('<Han> component', () => {
    let dispatch, wrapper, instance
    beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Han dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.componentDidMount() 
  })
  test('<Han> has 8 technics', () => {
        const wrapper = shallow(<Han />)
        const actual = wrapper.find('.technic')
        expect(actual.length).toBe(8)
  })
  test("clicking mindfulness circle calls popup", () => {
    instance.setPopup = jest.fn()
    let div = wrapper.find('.deg270')
    div.simulate('click')
    expect(instance.setPopup).toHaveBeenCalled()
  })
  test("clicking winnie div calls popup", () => {
    instance.setPopup = jest.fn()
    let div = wrapper.find('#winnie')
    div.simulate('click')
    expect(instance.setPopup).toHaveBeenCalled()
  })
  test("clicking technic divs plays audio", () => {
    instance.play = jest.fn()
    let div = wrapper.find('.deg90')
    div.simulate('click')
    expect(instance.play).toHaveBeenCalled()
  })
  test('clicking home-button calls dispatch', () => {
    expect.assertions(1)
    let button = wrapper.find('.homeSpace')
    button.simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})


  

  

  