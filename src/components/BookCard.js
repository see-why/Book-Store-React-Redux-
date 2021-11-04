import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeFromServer } from '../redux/books/books';

const BookCard = ({
  title,
  category,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul id={id}>
        <li>{category}</li>
        <li>{title}</li>
      </ul>
      <button type="button" onClick={() => { dispatch(removeFromServer(id)); }}>Remove</button>
    </>
  );
};

BookCard.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default BookCard;
