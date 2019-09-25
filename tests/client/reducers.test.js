import page from '../../client/reducers/page'
import { changePage } from '../../client/actions'


describe('page', () => {
    test('inital state is 0', () => {
        let state = page(undefined, { type: '@@INIT' })
        expect(state).toBe(0)
    })
    test('changePage changes the state', () => {
        let state = page(0, changePage(1))
        expect(state).toBe(1)
    })
})

