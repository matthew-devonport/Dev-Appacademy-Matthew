import page from '../../client/reducers/page';
import { changePage, setQuoteBox } from '../../client/actions';
import quoteBox from '../../client/reducers/quoteBox';

describe('page', () => {
  test('inital state is 0', () => {
    let state = page(undefined, { type: '@@INIT' });
    expect(state).toBe(0);
  });
  test('changePage changes the state', () => {
    let state = page(0, changePage(1));
    expect(state).toBe(1);
  });
});

describe('quoteBox', () => {
  test('initial state is an object', () => {
    let state = quoteBox(undefined, { type: '@@INIT' });
    expect(typeof state).toBe('object');
  });
  test('quoteBox changes the state', () => {
      expect.assertions(3)
      let state = quoteBox(undefined, setQuoteBox('hi', '20vh', '30vh'))
      expect(state.quote).toBe('hi')
      expect(state.top).toBe('20vh');
      expect(state.left).toBe('30vh');
  })
});
