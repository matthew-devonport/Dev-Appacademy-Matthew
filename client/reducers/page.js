
import {CHANGE_PAGE} from '../actions'

function page (state = 0, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page

    default:
      return state
  }
}

export default page