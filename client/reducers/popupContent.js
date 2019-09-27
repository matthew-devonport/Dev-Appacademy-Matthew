import { SET_POPUP } from '../actions'

function popupContent(state = '', action) {
  switch (action.type) {
    case SET_POPUP:
      return action.content

    default:
      return state
  }
}

export default popupContent
