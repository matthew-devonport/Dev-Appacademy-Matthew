import React from 'react'
import { shallow } from 'enzyme'

// import { getQuotesByName } from '../../../client/apiClient'

import QuoteBox from '../../../client/components/QuoteBox'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return component => component
    }
  }
})

describe('<PopUpBox /> Component', () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallow(
      <QuoteBox quoteBox={{quote: 'Test Text', top: 10, left: 12}} />
    )
  })

  test('content is displayed in the right place', () => {
    expect.assertions(1)
    let content = wrapper.find('#quote-box')

    expect(content.text()).toBe('Test Text')
  })

  test('styles are applied to box', () => {
    expect.assertions(2)
    let content = wrapper.find('#quote-box')

    expect(content.prop('style').left).toBe(12)
    expect(content.prop('style').top).toBe(10)
  })
})
