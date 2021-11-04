const LOAD_BOOKS = 'bookstore/book/GET_BOOKS';
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

const initialState = [];

// Define reducer
export default function reducer(state = initialState, action = {}) {
  const { id, book, books } = action;
  switch (action.type) {
    case ADD_BOOK:
      localStorage.setItem('books', JSON.stringify([...state, book]));
      return [...state, book];
    case REMOVE_BOOK:
      return (state.filter((book) => id !== book.id));
    case LOAD_BOOKS:
      return [
        ...Object.entries(books).map((item) => ({
          id: item[0],
          title: item[1][0].title,
          category: item[1][0].category,
        })),
      ];
    default: return state;
  }
}

// Create actions
export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function loadBooks(books) {
  return { type: LOAD_BOOKS, books };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

export const getFromServer = () => async (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  const books = await fetch(`${url}/apps/9XgdVr2aEGpR10zG2I7F/books/`);
  const result = await books.json();
  dispatch(loadBooks(result));
};

export const sendToServer = (data) => (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  fetch(`${url}/apps/9XgdVr2aEGpR10zG2I7F/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then(() => {
      dispatch(getFromServer());
    });
};

export const removeFromServer = (id) => (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  fetch(`${url}/apps/9XgdVr2aEGpR10zG2I7F/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  })
    .then((response) => response.text())
    .then(() => {
      dispatch(getFromServer());
    });
};
