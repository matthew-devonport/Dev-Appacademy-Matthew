import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'

jest.mock('../../../client/components/Room')
jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component 
        }
    }
})
import '../config/enzyme'

import Han from '../../../client/components/Han'
import { JestEnvironment } from '@jest/environment';
// Han.prototype.componentDidMount = () => {}

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

describe('<Han> component', () => {
  test('<Han> has 8 technics', () => {
        const wrapper = shallow(<Han />)
        const actual = wrapper.find('.technic')
        expect(actual.length).toBe(8)

  })
  test('test', (done) => {
    done()
  })
})