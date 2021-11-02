import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import store from '../redux/configureStore';
import BookCard from './BookCard';

const Books = () => {
  const {
    books: { books },
  } = store.getState();
  const Books = books.map((book) => {
    const {
      title,
      author,
      category,
      completed,
    } = book;
    return (
      <BookCard
        key={uuidv4()}
        completed={completed}
        title={title}
        author={author}
        category={category}
      />
    );
  });

  return <div>{Books}</div>;
};

export default Books;
