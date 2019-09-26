import * as actions from '../../client/actions'


test('changePage', () => {
    let action = actions.changePage(3)
    expect(action.type).toBe('CHANGE_PAGE')
    expect(action.page).toBe(3)
})

test('setQuoteBox', () => {
    let action = actions.setQuoteBox('hi', '20vh', '30vh');
    expect(action.type).toBe('SET_QUOTEBOX')
    expect(action.quote).toBe('hi')
    expect(action.top).toBe('20vh');
    expect(action.left).toBe('30vh');
})