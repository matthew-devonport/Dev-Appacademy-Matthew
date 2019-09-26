import { SET_QUOTEBOX } from '../actions';

function page(state = {}, action) {
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

export default page;
