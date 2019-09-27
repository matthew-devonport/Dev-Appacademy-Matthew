import { SET_POPUP } from '../actions'

function popupContent(state = '', action) {
  switch (action.type) {
    case SET_POPUP:
      return {
        content: action.content,
        name: action.name
      }

    default:
      return state
  }
}

export default popupContent
