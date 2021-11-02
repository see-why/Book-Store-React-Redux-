import React from 'react';
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
        key={Math.random()}
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
