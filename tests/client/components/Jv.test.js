import React from 'react'
import { shallow } from 'enzyme'

import Jv from '../../../client/components/Jv.jsx'
import TestRunner from 'jest-runner'



jest.mock('react-redux', () => {
    return {
        connect: () => {
            return component => component
        }
    }
})

jest.mock('../../../client/apiClient', () => {
    return {
        getVideos: jest.fn(() => {
            return Promise.resolve({
                videos:
                    ['video1', 'video2']
            })
        }),
        getQuotesByName: jest.fn(() => {
            return Promise.resolve({ body: ['quote1', 'quote2'] })
        })
    }
})

describe('<Jv /> Component', () => {
    let dispatch, wrapper, instance
    beforeEach(async () => {
        dispatch = jest.fn()
        wrapper = shallow(<Jv dispatch={dispatch} />)
        instance = wrapper.instance()
        await instance.componentDidMount
    })

    test('clicking button calls dispatch', () => {
        expect.assertions(1)
        let button = wrapper.find('button')
        button.simulate('click')
        expect(dispatch).toHaveBeenCalled()
    })
})