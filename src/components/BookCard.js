import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookCard = ({
  title,
  author,
  category,
  completed,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul id={id}>
        <li>{category}</li>
        <li>{title}</li>
        <li>{author}</li>
        <li>{completed}</li>
      </ul>
      <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
    </>
  );
};

BookCard.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  completed: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default BookCard;
