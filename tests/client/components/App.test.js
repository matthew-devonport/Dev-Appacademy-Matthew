import React from 'react'
import { shallow } from 'enzyme'

// import { getQuotesByName } from '../../../client/apiClient'

import App from '../../../client/components/App'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return component => component
    }
  }
})

describe('<Kelly /> Component', () => {
  let wrapper

  test('page 0 is the homepage', () => {
    expect.assertions(1)

    wrapper = shallow(<App page={0} />)
    let content = wrapper.find('div')

    expect(content.text()).toBe('<MainRoom />')
  })
  
  test('page 3 is Ollie\'s page', () => {
    expect.assertions(1)

    wrapper = shallow(<App page={3} />)
    let content = wrapper.find('div')

    expect(content.text()).toBe('<Ollie />')
  })
})
