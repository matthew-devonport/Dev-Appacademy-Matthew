import {combineReducers} from 'redux'

import page from './page'
import quoteBox from './quoteBox'
import popupContent from './popupContent'

export default combineReducers({
    page,
    quoteBox,
    popupContent
})