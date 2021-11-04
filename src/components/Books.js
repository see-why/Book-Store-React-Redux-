import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getFromServer } from '../redux/books/books';
import BookCard from './BookCard';

const Books = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state);

  books.sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const Books = books.map((book) => {
    const {
      title,
      category,
      id,
    } = book;
    return (
      <BookCard
        key={uuidv4()}
        id={id}
        title={title}
        category={category}
      />
    );
  });

  useEffect(() => {
    dispatch(getFromServer());
  }, []);

  return <div>{Books}</div>;
};

export default Books;
