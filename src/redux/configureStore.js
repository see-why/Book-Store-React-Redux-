import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const rootReducer = combineReducers({ books: booksReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
