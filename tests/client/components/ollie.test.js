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

describe('<Ollie />', () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallow(<Ollie />)
    instance = wrapper.instance()
  })
  test("clicking div calls popup", () => {
    let setPopup = jest.fn()
    let div = wrapper.find('#ollie-popUp')
    div.simulate('click')
    expect(setPopup).toHaveBeenCalled()
  })
})