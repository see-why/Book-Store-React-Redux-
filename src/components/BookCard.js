import React from 'react';
import propTypes from 'prop-types';

const BookCard = ({
  title,
  author,
  category,
  completed,
}) => (
  <>
    <ul>
      <li>{category}</li>
      <li>{title}</li>
      <li>{author}</li>
      <li>{completed}</li>
    </ul>
    <button type="button">Remove</button>
  </>
);

BookCard.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  completed: propTypes.string.isRequired,
};

export default BookCard;
