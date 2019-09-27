export const CHANGE_PAGE = 'CHANGE_PAGE'
export const SET_QUOTEBOX = 'SET_QUOTEBOX';
export const SET_POPUP = 'SET_POPUP';

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export const setPopup = (content, name) => {
  return {
    type: SET_POPUP,
    content,
    name
  }
}

export const setQuoteBox = (quote, top, left) => {
  
  return {
    type: SET_QUOTEBOX,
    quote,
    top,
    left
  };
};