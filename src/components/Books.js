import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const Books = () => {
  const { books } = useSelector((state) => state);

  const Books = books.map((book) => {
    const {
      title,
      author,
      category,
      completed,
      id,
    } = book;
    return (
      <BookCard
        key={uuidv4()}
        id={id}
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
