import { SET_QUOTEBOX } from '../actions';

function quoteBox(state = {}, action) {
  switch (action.type) {
    case SET_QUOTEBOX:
      return {
        quote: action.quote,
        top: action.top,
        left: action.left
      };

    default:
      return state;
  }
}

export default quoteBox;
