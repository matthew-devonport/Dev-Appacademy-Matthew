import React from 'react'
import { shallow } from 'enzyme'

// import { getQuotesByName } from '../../../client/apiClient'

import PopUpBox from '../../../client/components/PopUpBox'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return component => component
    }
  }
})

describe('<PopUpBox /> Component', () => {
  let wrapper, togglePopup
  beforeEach(async () => {
    togglePopup = jest.fn()
    wrapper = shallow(<PopUpBox togglePopup={togglePopup} content={'Test Text'} />)
  })

  test('content is displayed in the right place', () => {
    expect.assertions(1)
    let content = wrapper.find('#popup-content')

    expect(content.text()).toBe('Test Text')
  })

  test('Popup toggle triggered when close button pressed', () => {
    expect.assertions(1)
    let button = wrapper.find('#popup-close')
    button.simulate('click')
    expect(togglePopup).toHaveBeenCalled()
  })
})
