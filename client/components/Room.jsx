import React from 'react'

import { changePage } from '../actions'


class Room extends React.Component {

    handleClick = (pageNum) => {
        const { dispatch } = this.props
        dispatch(changePage(pageNum))
    }
}

export default Room
