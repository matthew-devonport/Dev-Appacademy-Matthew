import * as actions from '../../client/actions'


test('changePage', () => {
    let action = actions.changePage(3)
    expect(action.type).toBe('CHANGE_PAGE')
    expect(action.page).toBe(3)
})