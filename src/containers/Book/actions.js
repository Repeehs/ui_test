import { BOOK } from "./constants";

export const getBook = (page = 1) => ({
  type: BOOK.BOOK_GET_LIST,
  page,
});


export const getBookSuccess = (data) => ({
  type: BOOK.BOOK_GET_LIST_SUCCESS,
  data,
});

export const createBook = (data) => ({
  type: BOOK.BOOK_CREATE,
  data,
})

export const changePage = (page) => ({
  type: BOOK.CHANGE_PAGE,
  page,
})