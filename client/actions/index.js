export const CHANGE_PAGE = 'CHANGE_PAGE'
export const SET_QUOTEBOX = 'SET_QUOTEBOX';

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    page
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